import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomizationDto {

  @ApiProperty()
  @IsString()
  categories?: string;

  @ApiProperty()
  @IsString()
  strategy?: string;

  @ApiProperty()
  @IsString()
  method?: string;

  @ApiProperty()
  @IsString()
  newsSource?: string;

  @ApiProperty()
  @IsString()
  instrument?: string;

  @ApiProperty()
  @IsString()
  age?: string;

  @ApiProperty()
  @IsString()
  investingYears?: string;

  @ApiProperty()
  @IsString()
  goal?: string;

  @ApiProperty()
  @IsString()
  monthlyAmount?: string;

  @ApiProperty()
  @IsString()
  incomeSource?: string;

}
