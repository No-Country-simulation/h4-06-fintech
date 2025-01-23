import { PartialType,ApiProperty } from '@nestjs/swagger';
import { CreateSupportDto } from './create-support.dto';
import { Status } from '@prisma/client';
import {
    IsNotEmpty,
    IsEnum
} from 'class-validator';

export class UpdateSupportDto extends PartialType(CreateSupportDto) {

    @ApiProperty()
    @IsEnum(Status, { message: 'El estado debe ser uno de los valores permitidos: OPEN, INPROGRESS, CLOSED' })
    @IsNotEmpty()
    status: Status;

}
