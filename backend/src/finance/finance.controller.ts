import { Controller, Get, Param, Query } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { StockDTO } from './dto/finance.dto'; 

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  // Endpoint para obtener datos actuales de una acción
  @Get('stock/:ticker')
  async getStockData(@Param('ticker') ticker: string): Promise<StockDTO> { 
    return await this.financeService.getStockData(ticker);
  }

  // Endpoint para obtener datos históricos de una acción
  @Get('stock/:ticker/history')
  async getHistoricalData(
    @Param('ticker') ticker: string,
    @Query('period') period: string = '1mo',  // Permite que se pase el periodo como parámetro
  ) {
    return await this.financeService.getHistoricalData(ticker, period);
  }

  @Get('instruments')
  async getstockData(@Query('tickers') tickers: string): Promise<StockDTO[]> {
    const tickerList = tickers.split(',');
    return await this.financeService.getInstruments(tickerList);
   
  }
}
