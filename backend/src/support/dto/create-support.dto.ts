import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString,
} from 'class-validator';

export class CreateSupportDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo no puede estar vacio' })
    @IsString({ message: 'El campo debe ser una cadena de texto' })
    message: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    subject: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'The userId field cannot be empty' })
    @IsString({ message: 'The userId field must be a string' })
    userId: string;
}
