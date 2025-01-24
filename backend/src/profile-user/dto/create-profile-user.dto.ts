import { IsNotEmpty, IsString, IsEnum, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  FinancialGoal,
  InvestmentHorizon,
  RiskTolerance,
  ReactionToLoss,
  KnowledgeLevel
} from '@prisma/client';

export class CreateProfileDto {
  @ApiProperty({ enum: FinancialGoal })
  @IsEnum(FinancialGoal)
  financialGoal: FinancialGoal;

  @ApiProperty({ enum: InvestmentHorizon })
  @IsEnum(InvestmentHorizon)
  investmentHorizon: InvestmentHorizon;

  @ApiProperty({ enum: RiskTolerance })
  @IsEnum(RiskTolerance)
  riskTolerance: RiskTolerance;

  @ApiProperty()
  @IsNumber()
  monthlyAllocation: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  specificPurpose?: string;

  @ApiProperty({ type: [String] })
  @IsString({ each: true })
  instrumentsUsed: string[];

  @ApiProperty()
  @IsBoolean()
  hasDebts: boolean;

  @ApiProperty({ enum: ReactionToLoss })
  @IsEnum(ReactionToLoss)
  reactionToLoss: ReactionToLoss;

  @ApiProperty({ enum: KnowledgeLevel })
  @IsEnum(KnowledgeLevel)
  knowledgeLevel: KnowledgeLevel;

  @ApiProperty()
  @IsString()
  userId: string;
}
