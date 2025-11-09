import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordServiceModule } from './word-service/word-service.module';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WordServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        WORDS_API: Joi.string(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
