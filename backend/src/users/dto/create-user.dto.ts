import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	email: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	password: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	age: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	educationLevel: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	levelKnowledgeFinancial: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	riskPreferences: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	isActive: boolean;
}
