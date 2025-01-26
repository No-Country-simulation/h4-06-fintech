import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { TargetService } from './target.service';

@Controller('target')
export class TargetController {
  constructor(private readonly targetService: TargetService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createTargetDto: CreateTargetDto) {
    console.log('HOLAAAA');

    return this.targetService.create(createTargetDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.targetService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    const target = await this.targetService.findOne(id);

    if (target.userId !== req.user.id) {
      throw new UnauthorizedException('Unauthorized access for this resource');
    }

    return target;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.targetService.remove(+id);
  }
}
