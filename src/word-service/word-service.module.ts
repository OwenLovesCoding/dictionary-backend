import { Module } from '@nestjs/common';
import { WordServiceService } from './word-service.service';
import { WordServiceController } from './word-service.controller';

@Module({
  imports: [],
  providers: [WordServiceService],
  controllers: [WordServiceController],
  exports: [WordServiceService],
})
export class WordServiceModule {}
