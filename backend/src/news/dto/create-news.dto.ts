import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'El campo de título no puede estar vacío.' })
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'El campo de contenido no puede estar vacío.' })
  content: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'El campo de fuente no puede estar vacío.' })
  source: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'El campo de imagen no puede estar vacío.' })
  dateNews: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'El campo de categoria no puede estar vacío.' })
  category: string;
}
