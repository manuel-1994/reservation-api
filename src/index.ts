import express from 'express';
import cors from 'cors';
import { connectMongoDB } from './db/mongo.db';
import { ENV } from './config/env.config';
import router from './router';

async function bootstrap() {
  const app = express();

  /*middlewares */
  app.use(cors());
  app.use(express.json());

  /*dbConnection */
  await connectMongoDB();

  /*router */
  router(app);

  app.listen(ENV.PORT, () => {
    console.log(`API on http://localhost:${ENV.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start application', err);
  process.exit(1);
});
