import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomizationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCustomizationDto: CreateCustomizationDto, req: any) {
    try {
      const userId = req.user.id;

      // Check if user already has a customization
      const existingCustomization = await this.prismaService.customization.findUnique({
        where: { userId },
      });

      if (existingCustomization) {
        // If exists, update it instead of creating new
        const updated = await this.prismaService.customization.update({
          where: { userId },
          data: createCustomizationDto,
        });

        return {
          message: 'Customization updated successfully',
          data: updated,
        };
      }

      // If doesn't exist, create new
      const createdCustomization = await this.prismaService.customization.create({
        data: {
          userId,
          ...createCustomizationDto,
        },
      });

      return {
        message: 'Customization created successfully',
        data: createdCustomization,
      };
    } catch (error) {
      console.error('Error in customization:', error);
      throw new HttpException(
        'Error processing customization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(req: any) {
    const userId = req.user.id;
    try {
      const customization = await this.prismaService.customization.findUnique({
        where: { userId },
      });
      return customization;
    } catch (error) {
      throw new HttpException(
        'Error finding customization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(req: any) {
    const userId = req.user.id;
    try {
      const customization = await this.prismaService.customization.findUnique({
        where: { userId },
      });
      
      if (!customization) {
        throw new HttpException('Customization not found', HttpStatus.NOT_FOUND);
      }
      
      return customization;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Error finding customization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(updateCustomizationDto: UpdateCustomizationDto, req: any) {
    const userId = req.user.id;
    try {
      const updatedCustomization = await this.prismaService.customization.update({
        where: { userId },
        data: updateCustomizationDto,
      });
      
      return {
        message: 'Customization updated successfully',
        data: updatedCustomization,
      };
    } catch (error) {
      throw new HttpException(
        'Error updating customization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(req: any) {
    const userId = req.user.id;
    try {
      const removed = await this.prismaService.customization.delete({
        where: { userId },
      });

      return {
        message: 'Customization removed successfully',
        data: removed,
      };
    } catch (error) {
      throw new HttpException(
        'Error removing customization',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
