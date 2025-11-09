import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { WORD } from 'src/interfaces/word.interface';
import { ConfigService } from '@nestjs/config';
import { findMeaning } from './middlewares/findMeaning';

@Injectable()
export class WordServiceService {
  constructor(private configService: ConfigService) {}

  getPort() {
    return this.configService.get<string>('WORDS_API');
  }

  async defineWord(word: string) {
    if (!word || word.length === 0)
      return {
        message: 'Please enter a valid word',
        status: HttpStatus.BAD_REQUEST,
        success: false,
      };
    // console.log(word);

    try {
      const wordSort = await findMeaning(this.getPort(), word);
      //  console.log(wordSort);

      if (wordSort?.success) {
        // STEP 1: Search for a relevant page title
        const searchRes = await fetch(
          `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${word}&format=json&origin=*`,
        );

        if (!searchRes.ok) {
          return {
            message: 'Search failed',
            success: false,
            status: HttpStatus.BAD_REQUEST,
          };
        }

        const searchData = await searchRes.json();
        const searchResults = searchData.query.search;

        if (searchResults.length === 0) {
          return {
            message: 'No results found',
            success: false,
            status: HttpStatus.NOT_FOUND,
          };
        }

        // STEP 2: Get the first relevant title
        const pageTitle = searchResults[0].title;

        // STEP 3: Fetch the image from that title
        const imageRes = await fetch(
          `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
            pageTitle,
          )}&prop=pageimages&format=json&pithumbsize=500&origin=*`,
        );

        if (!imageRes.ok) {
          return {
            message: 'Could not fetch image data',
            success: false,
            status: HttpStatus.BAD_REQUEST,
          };
        }

        const imageData = await imageRes.json();
        const pages = imageData.query.pages;
        const page = Object.values(pages)[0] as any;

        // const foundVal = JSON.parse(wordSort.data.phonetic);
        // console.log(wordSort.info);
        // console.log("yes");

        return {
          image: page?.thumbnail?.source || null,
          success: true,
          status: HttpStatus.OK,
          ...wordSort.info,
        };
      }
    } catch (err) {
      if (err instanceof Error) {
        return {
          message: err.message,
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          success: false,
        };
      }
    }
  }
}
