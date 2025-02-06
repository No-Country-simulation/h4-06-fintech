import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request
} from '@nestjs/common';
import { CustomizationService } from './customization.service';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Customization')
@Controller('customization')
export class CustomizationController {
  constructor(private readonly customizationService: CustomizationService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Request() req, @Body() createCustomizationDto: CreateCustomizationDto) {
    return this.customizationService.create(createCustomizationDto, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Request() req) {
    return this.customizationService.findOne(req);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Body() updateCustomizationDto: UpdateCustomizationDto,
    @Request() req,
  ) {
    return this.customizationService.update(updateCustomizationDto, req);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Request() req) {
    return this.customizationService.remove(req);
  }
}
