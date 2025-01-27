import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty({ description: 'Main financial goal' })
  @IsString()
  mainGoal: string;

  @ApiProperty({ description: 'User’s financial skills level' })
  @IsString()
  financialSkills: string;

  @ApiProperty({ description: 'Risk tolerance level' })
  @IsString()
  riskTolerance: string;

  @ApiProperty({ description: 'Monthly investment allocation' })
  @IsString()
  monthlyInvestment: string;

  @ApiProperty({ description: 'Reason for saving or investing' })
  @IsString()
  savingsOrInvestmentReason: string;

  @ApiProperty({ description: 'Has the user invested before?' })
  @IsString()
  hasInvestedBefore: string;

  @ApiProperty({ description: 'Investment horizon' })
  @IsString()
  investmentHorizon: string; 

  @ApiProperty({ description: 'Financial goal' })
  @IsString()
  financialGoal: string;

  @ApiProperty({ description: 'Optional user ID if linked to a user profile', required: false })
  @IsOptional()
  @IsString()
  userId?: string;
}
