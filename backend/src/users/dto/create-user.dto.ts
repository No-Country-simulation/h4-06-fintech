import {ApiProperty, OmitType} from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength, ValidateNested,
} from 'class-validator';
import {CreateProfileDto} from "../../profile-user/dto/create-profile-user.dto";
import {Type} from "class-transformer";

export class Profile extends OmitType (CreateProfileDto, ['userId']) {}
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'El campo de correo electrónico no puede estar vacío.',
  })
  @IsString({ message: 'El correo electrónico debe ser una cadena de texto.' })
  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo de contraseña no puede estar vacío.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(20, {
    message: 'La contraseña no puede tener más de 20 caracteres.',
  })
  password: string;

  @ApiProperty({
    type: Profile,
    required: true
  })
  @ValidateNested({ each: true })
  @Type(() => Profile)
  profile: Profile;
}
