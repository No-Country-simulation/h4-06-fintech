import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';

@Injectable()
export class InvestmentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateInvestmentDto) {
    try {
      const investment = await this.prismaService.investment.create({
        data: {
          portfolioId: data.portfolioId,
          financialInstrumentId: data.financialInstrumentId,
          stockSymbol: data.stockSymbol,
          amountInvested: data.amountInvested,
          dateInvestment: data.dateInvestment instanceof Date ? data.dateInvestment : new Date(data.dateInvestment),
        },
      });
      return {
        message: 'Investment created successfully',
        data: investment,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error creating investment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.investment.findMany();
    } catch (error) {
      throw new HttpException(
        'Error find all investment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const findOne = await this.prismaService.investment.findUnique({
        where: {
          id,
        },
      });
      return {
        message: 'Investment found',
        data: findOne,
      };
    } catch (error) {
      throw new HttpException(
        'Investment not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateInvestmentDto: UpdateInvestmentDto) {
    await this.findOne(id);
    try {
      const updateInvestment = await this.prismaService.investment.update({
        where: { id },
        data: updateInvestmentDto,
      });
      return {
        message: 'Investment updated successfully',
        data: updateInvestment,
      };
    } catch (error) {
      throw new HttpException(
        'Error updating investment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      return await this.prismaService.investment.delete({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        'Error deleting investment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
