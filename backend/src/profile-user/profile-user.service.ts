import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile-user.dto';
import { PrismaService } from "../prisma/prisma.service";



@Injectable()
export class ProfileUserService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(createUserProfileDto: CreateProfileDto) {
        const profile = await this.prismaService.profile.create({

            data: createUserProfileDto,
        });
        return profile;
    }


}
