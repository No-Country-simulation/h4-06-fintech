import { Controller, Get, Param, Query } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  // Endpoint para obtener datos actuales de una acción
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
    return await this.financeService.getHistoricalData(ticker,  '1mo');
  }
}
