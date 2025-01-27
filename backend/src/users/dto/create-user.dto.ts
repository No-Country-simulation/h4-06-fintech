import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateFinancialRadiographyDto } from '../../FinancialRadiographies/FinancialRadiographies.dto';
import { CreateProfileDto } from '../../profile-user/dto/create-profile-user.dto';

export class Profile extends OmitType(CreateProfileDto, ['userId']) {}
export class FinancialRadiographies extends OmitType(
  CreateFinancialRadiographyDto,
  ['userId'],
) {}
export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({
    message: 'El campo de correo electrónico no puede estar vacío.',
  })
  @IsString({ message: 'El correo electrónico debe ser una cadena de texto.' })
  @IsEmail({}, { message: 'Debe proporcionar un correo electrónico válido.' })
  email: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo de contraseña no puede estar vacío.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  @MaxLength(20, {
    message: 'La contraseña no puede tener más de 20 caracteres.',
  })
  password: string;

  @ApiProperty({ type: FinancialRadiographies })
  @ValidateNested({ each: true })
  @Type(() => FinancialRadiographies)
  financialRadiographies?: FinancialRadiographies;

  @ApiProperty({
    type: Profile,
    required: true,
  })
  @ValidateNested({ each: true })
  @Type(() => Profile)
  profile: Profile;
}
