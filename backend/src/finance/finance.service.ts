import { Injectable } from '@nestjs/common';
import YahooFinance from 'yahoo-finance2';

@Injectable()
export class FinanceService {
  async getStockData(ticker: string) {
    const data = await YahooFinance.quote(ticker);
    return data;
  }

  async getHistoricalData(ticker: string, period:  '1mo') {
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
      interval: period,
    });

    return data;
  }
}
