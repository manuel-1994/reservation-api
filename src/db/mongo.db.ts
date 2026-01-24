import mongoose from 'mongoose';
import { ENV } from '../config/env.config.js';

export const connectMongoDB = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(ENV.DATABASE_URL);

  console.log('[Mongo] Connected');
};
