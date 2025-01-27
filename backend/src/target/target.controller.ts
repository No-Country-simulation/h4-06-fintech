import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddFundsDto } from './dto/add-funds.dto';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { TargetService } from './target.service';

@Controller('target')
export class TargetController {
  constructor(private readonly targetService: TargetService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createTargetDto: CreateTargetDto) {
    return this.targetService.create(createTargetDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.targetService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.targetService.findOneByUser(id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTargetDto: UpdateTargetDto) {
    return this.targetService.update(+id, updateTargetDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.targetService.remove(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/toggle-status/:id')
  toggleStatus(@Req() req, @Param('id') id: string) {
    return this.targetService.toggleStatus(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/add-funds/:id')
  addFunds(
    @Req() req,
    @Param('id') id: string,
    @Body() addFundsDto: AddFundsDto,
  ) {
    return this.targetService.addFunds(id, req.user.id, addFundsDto.amount);
  }
}
