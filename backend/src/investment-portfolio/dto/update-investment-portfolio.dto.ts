import { OmitType } from '@nestjs/swagger';
import { CreateInvestmentPortfolioDto } from './create-investment-portfolio.dto';

export class UpdateInvestmentPortfolioDto extends OmitType(
  CreateInvestmentPortfolioDto,
  ['userId'] as const,
) {}
