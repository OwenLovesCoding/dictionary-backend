
import { Connection } from 'mongoose';
import { WORD_MODEL } from 'src/db/constants';
import { WordSchema } from 'src/db/word.schema';

export const wordProviders = [
  {
    provide: WORD_MODEL,
    useFactory: (connection: Connection) => connection.model('Words', WordSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
