// src/db/database.providers.ts
import { createConnection } from 'mongoose';
import { DATABASE_CONNECTION } from './constants';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      const mongoUri = configService.get<string>('MONGO_URL');
      
      if (!mongoUri) {
        throw new Error('MONGO_URL is not defined in environment variables');
      }

      console.log('Connecting to MongoDB with URI:', mongoUri); // Debug log
      
      return await createConnection(mongoUri, {
        retryWrites: true,
        w: 'majority',
      });
    },
    inject: [ConfigService],
  },
];