import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { WordServiceService } from './word-service.service';

@Controller('word-service')
export class WordServiceController {
  constructor(private readonly wordService: WordServiceService) {}

  @Post('word')
  @HttpCode(HttpStatus.CREATED)
  getWordMeaning(@Body('word') word: string): Promise<unknown> {
    return this.wordService.defineWord(word);
  }
}
