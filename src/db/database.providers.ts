// db/database.providers.ts
import { createConnection } from 'mongoose';
import { DATABASE_CONNECTION } from './constants';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (configService: ConfigService) => {
      const mongoUri:any = configService.get<string>('MONGO_URL'); // Get from Railway
      return await createConnection(mongoUri);
    },
    inject: [ConfigService], // Inject ConfigService
  },
];