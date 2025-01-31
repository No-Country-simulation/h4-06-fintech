import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateInvestmentPortfolioDto } from './dto/create-investment-portfolio.dto';
import { UpdateInvestmentPortfolioDto } from './dto/update-investment-portfolio.dto';
import { InvestmentPortfolioService } from './investment-portfolio.service';

@Controller('investment-portfolio')
export class InvestmentPortfolioController {
  constructor(
    private readonly investmentPortfolioService: InvestmentPortfolioService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createInvestmentPortfolioDto: CreateInvestmentPortfolioDto) {
    return this.investmentPortfolioService.create(createInvestmentPortfolioDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.investmentPortfolioService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.investmentPortfolioService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateInvestmentPortfolioDto: UpdateInvestmentPortfolioDto,
  ) {
    return this.investmentPortfolioService.update(
      id,
      updateInvestmentPortfolioDto,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.investmentPortfolioService.remove(id);
  }
}
