
import * as mongoose from 'mongoose';

export const WordSchema = new mongoose.Schema({
 word: {
  type:String,
  // trim:true,
  // required:true
 }
});


