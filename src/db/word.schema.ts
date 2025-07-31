
import * as mongoose from 'mongoose';

export const WordSchema = new mongoose.Schema({
 word: {
  type:String,
  // trim:true,
  // required:true
 }
});


// import * as mongoose from 'mongoose';

// export const databaseProviders = [
//   {
//     provide: 'DATABASE_CONNECTION',
//     useFactory: (): Promise<typeof mongoose> =>
//       mongoose.connect('mongodb://localhost/nest'),
//   },
// ];
