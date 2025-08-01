import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
// import { databaseProviders } from './database.providers';

@Module({
     providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DbModule {}
