import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createCommentDto: CreateCommentDto) {
    try {
      const comment = await this.prismaService.comment.create({
        data: createCommentDto,
      });
      return {
        message: 'Comment created successfully',
        data: comment,
      };
    } catch (error) {
      throw new HttpException(
        'Error creating comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
      console.log(error);
    }
  }

  async findAll() {
    try {
      const findAllComments = await this.prismaService.comment.findMany();
      return findAllComments;
    } catch (error) {
      throw new HttpException(
        'Error creating comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const comment = await this.prismaService.comment.findUnique({
        where: {
          id,
        },
      });
      return {
        message: 'Comment found',
        data: comment,
      };
    } catch (error) {
      throw new HttpException(
        'Comment not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    await this.findOne(id);
    try {
      const comment = await this.prismaService.comment.update({
        where: {
          id,
        },
        data: updateCommentDto,
      });
      return {
        message: 'Comment updated successfully',
        data: comment,
      };
    } catch (error) {
      throw new HttpException(
        'Error updating comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.prismaService.comment.delete({
        where: {
          id: id,
        },
      });
      return {
        message: 'Comment deleted successfully',
        data: id,
      };
    } catch (error) {
      throw new HttpException(
        'Error deleting comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
