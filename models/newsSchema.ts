import * as mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  hat: { type: String },
  title: { type: String },
  text: { type: String },
  author: { type: String },
  img: { type: String },
  publishDate: { type: Date },
  tag: { type: String },
  link: { type: String },
  active: { type: Boolean },
});

export default NewsSchema;