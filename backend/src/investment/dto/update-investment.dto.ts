import { OmitType } from '@nestjs/swagger';
import { CreateInvestmentDto } from './create-investment.dto';

export class UpdateInvestmentDto extends OmitType(CreateInvestmentDto, [
  'portfolioId',
  'financialInstrumentId',
  'stockSymbol',
] as const) {}
