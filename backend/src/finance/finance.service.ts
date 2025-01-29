import {
  Injectable, HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import YahooFinance from 'yahoo-finance2';
import { StockDTO } from './dto/finance.dto';

//Apple Inc.	AAPL	NASDAQ
//Microsoft Corp.	MSFT	NASDAQ
//Amazon.com Inc.	AMZN	NASDAQ
//Tesla Inc.	TSLA	NASDAQ
//Alphabet Inc. (Google)	GOOGL	NASDAQ
//Meta Platforms Inc.	META	NASDAQ
//The Coca-Cola Company	KO	NYSE
//McDonald's Corp.	MCD	NYSE
//Nike Inc.	NKE	NYSE
//IBM Corp.	IBM	NYSE

//http://localhost:3000/finance/stock/AMZN

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) { }

  // Función para guardar los datos de una acción en la base de datos
  async saveStockData(ticker: string) {
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
        postMarketPrice: data.postMarketPrice ?? 0, // Manejo de valores faltantes
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
        rate: data.trailingAnnualDividendRate ?? 0, // Manejo de valores faltantes
        yield: data.trailingAnnualDividendYield ?? 0,
        date: data.dividendDate ? new Date(data.dividendDate) : null,
      },
      earnings: {
        nextDate: data.earningsTimestamp
          ? new Date(data.earningsTimestamp)
          : null,
        epsTrailing12Months: data.epsCurrentYear ?? 0,
        epsForward: data.epsForward ?? 0,
        peRatio: data.trailingPE ?? 0,
      },
      marketCap: Number(data.marketCap / 1000000) || 0,
    };

    // Guardar en la base de datos
    let stock = await this.prisma.stock.create({
      data: {
        symbol: stockData.symbol,
        name: stockData.name,
        typeDisp: stockData.typeDisp,
        currency: stockData.currency,
        market: stockData.market,
        price: {
          create: stockData.price,
        },
        volume: {
          create: stockData.volume,
        },
        week52: {
          create: stockData.week52,
        },
        dividend: {
          create: stockData.dividend,
        },
        earnings: {
          create: stockData.earnings,
        },
        marketCap: stockData.marketCap,
      },
    });

    return stock;
  }

  // Endpoint para obtener los datos actuales de una acción
  async getStockData(ticker: string) {
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

      if (!stock) {
        console.log(
          `Stock no encontrado, obteniendo datos de Yahoo Finance...`,
        );
        await this.saveStockData(ticker);
        stock = await this.prisma.stock.findUnique({
          where: { symbol: ticker },
          include: {
            price: true,
            volume: true,
            week52: true,
            dividend: true,
            earnings: true,
          },
        });
      } else {
        await this.prisma.stock.update({
          where: { symbol: ticker },
          data: {
            price: {
              update: stock.price,
            },
            volume: {
              update: stock.volume,
            },
            week52: {
              update: stock.week52,
            },
            dividend: {
              update: stock.dividend,
            },
            earnings: {
              update: stock.earnings,
            },
            marketCap: stock.marketCap,
          },
        });
      }
      return stock;
    } catch (error) {
      throw new HttpException('Error al obtener los datos de la acción', HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }
  async getInstruments(tickers: string[]) {
    const stockPromises = tickers.map(ticker => this.getStockData(ticker));
    return Promise.all(stockPromises);
  }

  // Endpoint para obtener los datos históricos de una acción (se mantiene igual)
  async getHistoricalData(ticker: string, period: string) {
    const period1 = new Date();
    const period2 = new Date();

    switch (period) {
      case '1mo':
        period1.setMonth(period1.getMonth() - 1);
        break;
    }

    const data = await YahooFinance.historical(ticker, {
      period1: period1.toISOString(),
      period2: period2.toISOString(),
    });

    return data;
  }
}