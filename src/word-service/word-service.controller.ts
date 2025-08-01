import { Body, Controller, Get, Post } from '@nestjs/common';
import { WordServiceService } from './word-service.service';

@Controller('word-service')
export class WordServiceController {
   constructor (private readonly wordService:WordServiceService) {}

    @Post()
    getWordMeaning(@Body("word") word:string):Promise<unknown> {
        return this.wordService.defineWord(word);
    }
}
