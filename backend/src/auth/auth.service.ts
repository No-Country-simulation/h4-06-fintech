import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import {AuthEntity} from "./entity/auth.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private prismaService: PrismaService, private jwtService: JwtService) {}

	async login(email: string, password: string): Promise<AuthEntity> {
		const user = await this.prismaService.user.findUnique({
			where: { email }
		})

		if (!user) {
			throw new NotFoundException(`User with email ${email} not found`);
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password');
		}

		return {
			accessToken: this.jwtService.sign({ id: user.id })
		}
	}
}
