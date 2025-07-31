import { Module } from '@nestjs/common';
import { WordServiceService } from './word-service.service';
import { WordServiceController } from './word-service.controller';
import { DbModule } from 'src/db/db.module';
import { wordProviders } from 'src/words/words.providers';

@Module({
  imports:[DbModule],
  providers: [WordServiceService, ...wordProviders],
  controllers: [WordServiceController],
  exports:[WordServiceService]
})
export class WordServiceModule {}
