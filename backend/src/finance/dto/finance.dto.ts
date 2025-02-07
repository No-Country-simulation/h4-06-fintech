import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsDate,
  IsInt,
  Min,
  Max,
  ValidateNested,
  IsObject,
  IsBoolean,
  isString,
  isNumber,
} from 'class-validator';
import { isBigInt64Array } from 'util/types';

export class PriceDTO {
  @ApiProperty()
  @IsNumber()
  current: number;

  @ApiProperty()
  @IsNumber()
  changePercent: number;

  @ApiProperty()
  @IsNumber()
  open: number;

  @ApiProperty()
  @IsNumber()
  dayLow: number;

  @ApiProperty()
  @IsNumber()
  dayHigh: number;

  @ApiProperty()
  @IsNumber()
  previousClose: number;

  @ApiProperty()
  @IsNumber()
  postMarketPrice: number;

  @ApiProperty()
  @IsNumber()
  postMarketChange: number;
}

export class VolumeDTO {
  @ApiProperty()
  @IsInt()
  current: number;

  @ApiProperty()
  @IsInt()
  average3Months: number;

  @ApiProperty()
  @IsInt()
  average10Days: number;
}

export class Week52DTO {
  @ApiProperty()
  @IsNumber()
  high: number;

  @ApiProperty()
  @IsNumber()
  low: number;

  @ApiProperty()
  @IsNumber()
  changeFromHigh: number;

  @ApiProperty()
  @IsNumber()
  changeFromLow: number;
}

export class DividendDTO {
  @ApiProperty()
  @IsNumber()
  rate: number;

  @ApiProperty()
  @IsNumber()
  yield: number;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  date: Date | null;
}

export class EarningsDTO {
  @ApiProperty()
  @IsOptional()
  @IsDate()
  nextDate?: Date | null;

  @ApiProperty()
  @IsNumber()
  epsTrailing12Months: number;

  @ApiProperty()
  @IsNumber()
  epsForward: number;

  @ApiProperty()
  @IsNumber()
  peRatio: number;
}

export class StockDTO {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  symbol: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  typeDisp: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  market: string;

  @ApiProperty({ type: PriceDTO })
  @ValidateNested()
  @IsObject()
  price: PriceDTO;

  @ApiProperty({ type: VolumeDTO })
  @ValidateNested()
  @IsObject()
  volume: VolumeDTO;

  @ApiProperty({ type: Week52DTO })
  @ValidateNested()
  @IsObject()
  week52: Week52DTO;

  @ApiProperty({ type: DividendDTO })
  @ValidateNested()
  @IsObject()
  dividend: DividendDTO;

  @ApiProperty({ type: EarningsDTO })
  @ValidateNested()
  @IsObject()
  earnings: EarningsDTO;

  @ApiProperty()
  @IsNumber()
  marketCap: number;

}
