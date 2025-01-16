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
  @IsNotEmpty()
  @IsEnum(FinancialGoal)
  financialGoal: FinancialGoal;

  @ApiProperty({ enum: InvestmentHorizon })
  @IsNotEmpty()
  @IsEnum(InvestmentHorizon)
  investmentHorizon: InvestmentHorizon;

  @ApiProperty({ enum: RiskTolerance })
  @IsNotEmpty()
  @IsEnum(RiskTolerance)
  riskTolerance: RiskTolerance;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  monthlyAllocation: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  specificPurpose?: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty()
  @IsString({ each: true })
  instrumentsUsed: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  hasDebts: boolean;

  @ApiProperty({ enum: ReactionToLoss })
  @IsNotEmpty()
  @IsEnum(ReactionToLoss)
  reactionToLoss: ReactionToLoss;

  @ApiProperty({ enum: KnowledgeLevel })
  @IsNotEmpty()
  @IsEnum(KnowledgeLevel)
  knowledgeLevel: KnowledgeLevel;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userId: string;
}
