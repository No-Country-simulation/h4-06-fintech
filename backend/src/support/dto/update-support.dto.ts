import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Status } from '../../../prisma/generated/client';
import { CreateSupportDto } from './create-support.dto';

export class UpdateSupportDto extends PartialType(CreateSupportDto) {
  @ApiProperty()
  @IsEnum(Status, {
    message:
      'El estado debe ser uno de los valores permitidos: OPEN, INPROGRESS, CLOSED',
  })
  @IsNotEmpty()
  status: Status;
}
