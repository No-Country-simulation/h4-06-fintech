import { OmitType } from '@nestjs/swagger';
import { CreateCustomizationDto } from './create-customization.dto';

export class UpdateCustomizationDto extends OmitType(CreateCustomizationDto, [
  'userId',
] as const) {}
