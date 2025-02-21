import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInvestmentPortfolioDto } from './dto/create-investment-portfolio.dto';
import { UpdateInvestmentPortfolioDto } from './dto/update-investment-portfolio.dto';

@Injectable()
export class InvestmentPortfolioService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createInvestmentPortfolioDto: CreateInvestmentPortfolioDto) {
    try {
      const { userId, investment, ...rest } = createInvestmentPortfolioDto;

      // Validar que userId no sea null o undefined
      if (!userId) {
        throw new HttpException('User ID is required', HttpStatus.BAD_REQUEST);
      }

      // Buscar si el usuario ya tiene un portfolio
      const existingPortfolio =
        await this.prismaService.investmentPortfolio.findFirst({
          where: { userId },
        });

      if (existingPortfolio) {
        throw new HttpException(
          'User already has a portfolio',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Asegurar que investment sea un array o inicializarlo vacío
      const investmentsArray = Array.isArray(investment) ? investment : [];

      // Crear el portfolio con inversiones
      const investmentPortfolio =
        await this.prismaService.investmentPortfolio.create({
          data: {
            ...rest,
            userId,
            investments: {
              create: investmentsArray,
            },
          },
          include: {
            investments: {
              include: {
                stock:{
                  include: {
                    price: true,
                  }
                }
              }
            },
            
          },
        });

      return {
        message: 'Portfolio created successfully',
        data: investmentPortfolio,
      };
    } catch (error) {
      console.error('Error creating portfolio:', error); // 👈 Imprime el error real en consola

      // Capturar errores específicos de Prisma
      if (error.code === 'P2002') {
        throw new HttpException(
          'User already has a portfolio',
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        error.message || 'Internal server error',
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
