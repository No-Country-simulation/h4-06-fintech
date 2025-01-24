import { Controller, Get, Param, Query } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  // Endpoint para obtener datos actuales de una acción
  // Obtener datos historicos de una accion http://localhost:3000/finance/stock/AAPL/history?period=1mo

  //2. Ejemplos de Tickers Famosos
  //Ejemplos de ticket para sustituir en la url

  //Empresa	Ticker	Bolsa

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

  // Obtener datos actuales http://localhost:3000/finance/stock/AAPL

  @Get('stock/:ticker')
  async getStockData(@Param('ticker') ticker: string) {
    return await this.financeService.getStockData(ticker);
  }

  // Endpoint para obtener datos históricos de una acción
  @Get('stock/:ticker/history')
  async getHistoricalData(
    @Param('ticker') ticker: string,
    @Query('period') period: string,
  ) {
    return await this.financeService.getHistoricalData(ticker, '1mo');
  }
}
