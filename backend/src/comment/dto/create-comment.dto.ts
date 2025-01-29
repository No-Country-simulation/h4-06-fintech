import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Content is required' })
  content: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  dateComment: Date;

  @ApiProperty()
  @IsString()
  @IsOptional({ message: 'UserId is not required' })
  userId: string;

  @ApiProperty()
  @IsString()
  @IsOptional({ message: 'NewsId is not required' })
  newsId: string;
}
