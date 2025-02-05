import {
  Controller,
  Get,
  Param,
  Query,
  ParseArrayPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { FinanceService } from './finance.service';
import { StockDTO } from './dto/finance.dto';

@ApiTags('Finance')
@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @ApiOperation({ summary: 'Obtiene los datos actuales de una acción' })
  @ApiParam({
    name: 'ticker',
    example: 'AAPL',
    description: 'Símbolo de la acción',
  })
  @ApiResponse({
    status: 200,
    description: 'Datos obtenidos correctamente',
    type: StockDTO,
  })
  @Get('stocks/:ticker')
  async getStockData(@Param('ticker') ticker: string): Promise<StockDTO> {
    console.log('HOLAA');

    return this.financeService.getStockData(ticker, false);
  }

  @ApiOperation({ summary: 'Obtiene los datos históricos de una acción' })
  @ApiParam({
    name: 'ticker',
    example: 'AAPL',
    description: 'Símbolo de la acción',
  })
  @ApiQuery({
    name: 'period',
    example: '1mo',
    required: false,
    description: 'Periodo de los datos históricos',
  })
  @ApiResponse({
    status: 200,
    description: 'Datos históricos obtenidos correctamente',
  })
  @Get('stocks/:ticker/history')
  async getHistoricalData(
    @Param('ticker') ticker: string,
    @Query('period', new DefaultValuePipe('1mo')) period: string,
  ) {
    return this.financeService.getHistoricalData(ticker, period);
  }

  @ApiOperation({ summary: 'Obtiene los datos de múltiples acciones' })
  @ApiQuery({
    name: 'tickers',
    example: 'AAPL,GOOG,TSLA',
    required: true,
    description: 'Lista de símbolos separados por comas',
  })
  @ApiResponse({
    status: 200,
    description: 'Datos obtenidos correctamente',
    type: [StockDTO],
  })
  @Get('stocks')
  async getStocksData(
    @Query('tickers', new ParseArrayPipe({ items: String, separator: ',' }))
    tickers: string[],
  ): Promise<StockDTO[]> {
    return this.financeService.getInstruments(tickers, true);
  }
}
