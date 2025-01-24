import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional, IsString } from 'class-validator';

// Enums imported from Prisma's generated client
import {
  MainGoal,
  FinancialSkills,
  RiskTolerance,
  MonthlyInvestment,
  SavingsReason,
  InvestmentTimeframe,
} from '../../../prisma/generated/client';

export class CreateProfileDto {
  @ApiProperty({ enum: MainGoal, description: 'Main financial goal' })
  @IsEnum(MainGoal)
  mainGoal: MainGoal;

  @ApiProperty({ enum: FinancialSkills, description: 'User’s financial skills level' })
  @IsEnum(FinancialSkills)
  financialSkills: FinancialSkills;

  @ApiProperty({ enum: RiskTolerance, description: 'Risk tolerance level' })
  @IsEnum(RiskTolerance)
  riskTolerance: RiskTolerance;

  @ApiProperty({ enum: MonthlyInvestment, description: 'Monthly investment allocation' })
  @IsEnum(MonthlyInvestment)
  monthlyInvestment: MonthlyInvestment;

  @ApiProperty({
    enum: SavingsReason,
    description: 'Reason for saving or investing',
  })
  @IsEnum(SavingsReason)
  savingsOrInvestmentReason: SavingsReason;

  @ApiProperty({
    enum: InvestmentTimeframe,
    description: 'Investment timeframe for achieving goals',
  })
  @IsEnum(InvestmentTimeframe)
  investmentTimeframe: InvestmentTimeframe;

  @ApiProperty({
    description: 'Has the user invested before?',
  })
  @IsBoolean()
  hasInvestedBefore: boolean;

  @ApiProperty({
    description: 'Does the user have a financial goal for the next 6-12 months?',
  })
  @IsBoolean()
  financialGoalNextYear: boolean;

  @ApiProperty({
    description: 'Optional user ID if linked to a user profile',
    required: false,
  })
  @IsOptional()
  @IsString()
  userId?: string;
}
