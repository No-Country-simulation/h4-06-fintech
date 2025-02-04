import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomizationDto } from './dto/create-customization.dto';
import { UpdateCustomizationDto } from './dto/update-customization.dto';
import { PrismaService } from '@/src/prisma/prisma.service';

@Injectable()
export class CustomizationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCustomizationDto: CreateCustomizationDto) {
    try {
      const createdCustomization =
        await this.prismaService.customization.create({
          data: createCustomizationDto,
        });
      return {
        message: 'Customization created successfully',
        data: createdCustomization,
      };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.prismaService.customization.findMany();
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const customization = await this.prismaService.customization.findUnique({
        where: {
          id,
        },
      });
      return customization;
    } catch (error) {
      throw new HttpException(
        'Customization not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCustomizationDto: UpdateCustomizationDto) {
    await this.findOne(id);
    try {
      const updatedCustomization =
        await this.prismaService.customization.update({
          where: {
            id,
          },
          data: {
            ...updateCustomizationDto,
          },
        });
      return {
        message: 'Customization updated successfully',
        data: updatedCustomization,
      };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      const remove = await this.prismaService.customization.delete({
        where: {
          id,
        },
      });

      return {
        message: 'Customization removed successfully',
        data: remove,
      };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
