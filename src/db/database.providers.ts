// db/database.providers.ts
import { createConnection } from 'mongoose';
import { DATABASE_CONNECTION } from './constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      await createConnection('mongodb://localhost/dictionary'),
  },
];
