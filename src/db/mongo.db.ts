import mongoose from 'mongoose';
import { ENV } from '../config/env.config.js';

export const connectMongoDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(ENV.DATABASE_URL);

    console.log('[Mongo] Connected');
  } catch (error) {
    console.error('[Mongo] Connection error:', error);
    process.exit(1);
  }
};
