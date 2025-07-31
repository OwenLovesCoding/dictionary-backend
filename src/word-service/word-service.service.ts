import {HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { WORD_MODEL } from 'src/db/constants';
import { WORD } from 'src/interfaces/word.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WordServiceService {
     constructor(
    @Inject(WORD_MODEL)
    private wordModel: Model<WORD>,
    private configService:ConfigService
  ) {}

     getPort() {
    return this.configService.get<string>('WORDS_API');
  }

//   async defineWord(word:string) {
//     console.log(this.getPort());
//     return word;
//   }

  async defineWord(word:string){
    if (!word || word.length === 0) return "please enter a valid word";
    
    try {
        const mainData = await fetch(`${this.getPort()}/${word}`);
        if (mainData.ok) {
            const res = mainData.json();
            return res;
        } else {
            return {
                message: "Word does not exist",
                success:false,
                status:HttpStatus.NOT_FOUND
            }
        }
    } catch (err) {
        if (err instanceof Error) {
            return {
                message: err.message,
                status:500,
                success:false
            }
        }
    }
  }

}
