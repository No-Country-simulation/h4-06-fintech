import {
  Injectable, HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import YahooFinance from 'yahoo-finance2';
import { StockDTO } from './dto/finance.dto';

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) {}

  // Función para obtener y guardar datos desde Yahoo Finance
  async fetchAndSaveStockData(ticker: string) {
    try {
      const data = await YahooFinance.quote(ticker);

      const stockData: StockDTO = {
        symbol: data.symbol,
        name: data.shortName,
        typeDisp: data.typeDisp,
        currency: data.currency,
        market: data.exchange,
        price: {
          current: data.regularMarketPrice,
          changePercent: data.regularMarketChangePercent,
          open: data.regularMarketOpen,
          dayLow: data.regularMarketDayLow,
          dayHigh: data.regularMarketDayHigh,
          previousClose: data.regularMarketPreviousClose,
          postMarketPrice: data.postMarketPrice ?? 0,
          postMarketChange: data.postMarketChangePercent ?? 0,
        },
        volume: {
          current: data.regularMarketVolume,
          average3Months: data.averageDailyVolume3Month,
          average10Days: data.averageDailyVolume10Day,
        },
        week52: {
          high: data.fiftyTwoWeekHigh,
          low: data.fiftyTwoWeekLow,
          changeFromHigh: data.fiftyTwoWeekHighChange,
          changeFromLow: data.fiftyTwoWeekLowChange,
        },
        dividend: {
          rate: data.trailingAnnualDividendRate ?? 0,
          yield: data.trailingAnnualDividendYield ?? 0,
          date: data.dividendDate ? new Date(data.dividendDate) : null,
        },
        earnings: {
          nextDate: data.earningsTimestamp ? new Date(data.earningsTimestamp) : null,
          epsTrailing12Months: data.epsCurrentYear ?? 0,
          epsForward: data.epsForward ?? 0,
          peRatio: data.trailingPE ?? 0,
        },
        marketCap: Number(data.marketCap / 1_000_000) || 0,
      };

      // Crear o actualizar en la base de datos
      return await this.prisma.stock.upsert({
        where: { symbol: stockData.symbol },
        update: {
          name: stockData.name,
          typeDisp: stockData.typeDisp,
          currency: stockData.currency,
          market: stockData.market,
          marketCap: stockData.marketCap,
          price: { update: stockData.price },
          volume: { update: stockData.volume },
          week52: { update: stockData.week52 },
          dividend: { update: stockData.dividend },
          earnings: { update: stockData.earnings },
        },
        create: {
          symbol: stockData.symbol,
          name: stockData.name,
          typeDisp: stockData.typeDisp,
          currency: stockData.currency,
          market: stockData.market,
          marketCap: stockData.marketCap,
          price: { create: stockData.price },
          volume: { create: stockData.volume },
          week52: { create: stockData.week52 },
          dividend: { create: stockData.dividend },
          earnings: { create: stockData.earnings },
        },
        include: {
          price: true,
          volume: true,
          week52: true,
          dividend: true,
          earnings: true,
        },
      });
    } catch (error) {
      throw new HttpException('Error al obtener los datos de Yahoo Finance', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Obtiene los datos de la base de datos o los actualiza si `isFromDB` es falso
  async getStockData(ticker: string, isFromDB: boolean) {
    try {
      let stock = await this.prisma.stock.findUnique({
        where: { symbol: ticker },
        include: {
          price: true,
          volume: true,
          week52: true,
          dividend: true,
          earnings: true,
        },
      });

      if (!stock || !isFromDB) {
        console.log(`Obteniendo datos de Yahoo Finance para ${ticker}...`);
        stock = await this.fetchAndSaveStockData(ticker);
      }

      return stock;
    } catch (error) {
      throw new HttpException('Error al obtener los datos de la acción', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Obtiene múltiples acciones a la vez
  async getInstruments(tickers: string[], isFromDB: boolean) {
    return Promise.all(tickers.map(ticker => this.getStockData(ticker, isFromDB)));
  }

  // Obtiene datos históricos
  async getHistoricalData(ticker: string, period: string) {
    try {
      const period1 = new Date();
      const period2 = new Date();

      if (period === '1mo') {
        period1.setMonth(period1.getMonth() - 1);
      }

      return await YahooFinance.historical(ticker, {
        period1: period1.toISOString(),
        period2: period2.toISOString(),
      });
    } catch (error) {
      throw new HttpException('Error al obtener los datos históricos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
