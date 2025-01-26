import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async remove(id: string, userId: string) {
    return await this.prismaService.target.delete({
      where: {
        id,
        AND: {
          userId,
        },
      },
    });
  }

  async toggleStatus(id: string, userId: string) {
    const target = await this.findOneByUser(id, userId);

    const updatedTarget = await this.prismaService.target.update({
      where: {
        id,
      },
      data: {
        isActive: !target.isActive,
      },
    });

    return updatedTarget;
  }

  async addFunds(id: string, userId: string, amount: number) {
    const target = await this.findOneByUser(id, userId);

    const newProgressAmount = Number(target.progress) + amount;

    if (newProgressAmount > Number(target.amount)) {
      throw new BadRequestException('New progress amount out of range');
    }

    const result = await this.prismaService.target.update({
      where: {
        id,
      },
      data: {
        progress: newProgressAmount,
      },
    });

    return result;
  }

  async findOneByUser(id: string, userId: string) {
    const target = await this.findOne(id);

    if (target.userId !== userId) {
      console.warn(
        `Unauthorized access attempt by user ${userId} on target ${id}`,
      );
      throw new UnauthorizedException(
        'Unauthorized access to modify this resource',
      );
    }

    return target;
  }
}
