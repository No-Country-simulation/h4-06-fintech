import { Controller, Post, Body, Param } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile-user.dto';
import { ProfileUserService } from './profile-user.service';

@Controller('profile-user')

export class ProfileUserController {
  constructor(private readonly profileUserService: ProfileUserService) {}

  @Post(':id') 
  async create(
    @Param('id') id: string,
    @Body() createProfileDto: CreateProfileDto, 
  ) {
    createProfileDto.userId = id; 
    return this.profileUserService.create(createProfileDto); 
  }
}
