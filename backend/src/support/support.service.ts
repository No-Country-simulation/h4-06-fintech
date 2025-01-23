import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SupportService {

  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  async create(createSupportDto: CreateSupportDto) {

    const { subject, message, userId } = createSupportDto;

    try {
      const newSupport = await this.prismaService.support.create({
        data: {
          subject,
          message,
          userId,
        }
      })
      console.log(newSupport)
      return newSupport;

    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async findAll() {
    try {
      const findAll = await this.prismaService.support.findMany()
      return findAll

    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async findOne(id: string) {

    try {
      const findOne = await this.prismaService.support.findUnique({
        where: { id }
      })
      if (!findOne) {
        throw new HttpException(
          'User not found',
          HttpStatus.NOT_FOUND
        );
      }
      return {message: "user found", data: findOne}
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: string, updateSupportDto: UpdateSupportDto) {
    await this.findOne(id)

    try {
      const { status, ...rest } = updateSupportDto;
  
      const update = await this.prismaService.support.update({
        where: {id},
        data: {
          status,
          ...rest
        }
      });
  
      return {
        message: 'Support updated successfully',
        data: update,
      };
      
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    try {
      const remove = await this.prismaService.support.delete({
        where: { id },
      });
      return {
        message: 'Support deleted successfully',
        data: remove,
      };
    } catch (error) {
        throw new HttpException(
            'Internal server error',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
  }
}
