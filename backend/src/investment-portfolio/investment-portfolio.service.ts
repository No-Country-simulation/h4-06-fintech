import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvestmentPortfolioDto } from './dto/create-investment-portfolio.dto';
import { UpdateInvestmentPortfolioDto } from './dto/update-investment-portfolio.dto';

@Injectable()
export class InvestmentPortfolioService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createInvestmentPortfolioDto: CreateInvestmentPortfolioDto) {
    try {
      const investmentPortfolio =
        await this.prismaService.investmentPortfolio.create({
          data: createInvestmentPortfolioDto,
        });
      return investmentPortfolio;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.investmentPortfolio.findMany({
        include: {
          investments: true,
        },
      });
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const investmentPortfolio =
        await this.prismaService.investmentPortfolio.findUnique({
          where: { id },
          include: {
            investments: true,
          },
        });
      return investmentPortfolio;
    } catch (error) {
      throw new HttpException(
        'Investment portfolio not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: string,
    updateInvestmentPortfolioDto: UpdateInvestmentPortfolioDto,
  ) {
    await this.findOne(id);
    try {
      const investmentPortfoloioUpdate =
        await this.prismaService.investmentPortfolio.update({
          where: { id },
          data: updateInvestmentPortfolioDto,
        });
      return {
        message: 'Investment portfolio updated successfully',
        investmentPortfoloioUpdate,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      const removeInvestmentPortfolio =
        await this.prismaService.investmentPortfolio.delete({
          where: { id },
        });
      return {
        message: 'Investment portfolio deleted successfully',
        removeInvestmentPortfolio,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
