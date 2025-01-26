import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';

@Injectable()
export class TargetService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTargetDto: CreateTargetDto, userId: string) {
    const { durationMonths, ...rest } = createTargetDto;
    const dateTarget = new Date();
    dateTarget.setMonth(dateTarget.getMonth() + createTargetDto.durationMonths);

    const result = await this.prismaService.target.create({
      data: {
        ...rest,
        dateTarget,
        userId,
      },
    });

    return result;
  }

  findAll() {
    return `This action returns all target`;
  }

  async findOne(id: string) {
    const target = await this.prismaService.target.findUnique({
      where: {
        id,
      },
    });

    if (!target) {
      throw new NotFoundException(`Target with id ${id} not found`);
    }

    return target;
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return `This action updates a #${id} target`;
  }

  remove(id: number) {
    return `This action removes a #${id} target`;
  }
}
