import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class NewsService {
  constructor(private readonly prismaService: PrismaService) {}
  private readonly apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  private readonly baseUrl = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo';

  async getNewsSentiment() {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          function: 'NEWS_SENTIMENT',
          apikey: this.apiKey,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error('Error fetching news sentiment');
    }
  }

  async create(createNewsDto: CreateNewsDto) {
    try {
      const data = await this.getNewsSentiment();
  
      const formatDate = (time_published: string) => {
        const year = time_published.substring(0, 4);
        const month = time_published.substring(4, 6);
        const day = time_published.substring(6, 8);
        const hour = time_published.substring(9, 11);
        const minute = time_published.substring(11, 13);
      
        return new Date(`${year}-${month}-${day}T${hour}:${minute}:00Z`);
      };

      const newsPromises = data.feed.map((news) => 
        this.prismaService.news.create({
          data: {
            title: news.title,
            content: news.summary,
            source: news.source,
            dateNews: formatDate(news.time_published),
            category: news.topic || "Uncategorized",
          },
        })
      );
  
      const savedNews = await Promise.all(newsPromises);
      return savedNews;
    } catch (error) {
      console.error('Error saving news:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
  async findAll() {
    try {
      return await this.prismaService.news.findMany({
        include: {
          comment: true,
          
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
      const findNews = await this.prismaService.news.findUnique({
        where: { id },
        include: {
          comment: true,
        },
      });
      if (!findNews) {
        throw new HttpException('Noticia no encontrada', HttpStatus.NOT_FOUND);
      }
      return findNews;
    } catch (error) {
      throw new HttpException('News no found', HttpStatus.NOT_FOUND);
    }
  }
  
  async update(id: string, updateNewsDto: UpdateNewsDto) {
    await this.findOne(id);
    try {
      const updateNews = await this.prismaService.news.update({
        where: { id },
        data: updateNewsDto,
      });
      return {
        message: 'Noticia actualizada',
        data: updateNews,
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
      await this.prismaService.news.delete({
        where: { id },
      });
      return {
        message: 'Noticia eliminada',
        data: null,
      };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
