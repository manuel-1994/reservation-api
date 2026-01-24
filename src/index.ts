import express from 'express';
import cors from 'cors';
import reservationRoutes from './routes/reservation.routes';
import errorHanddle from './middlewares/error.middleware';

import { connectMongoDB } from './db/mongo.db';
import { ENV } from './config/env.config';

async function bootstrap() {
  await connectMongoDB();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/reservations', reservationRoutes);

  app.use(errorHanddle);

  app.listen(ENV.PORT, () => {
    console.log(`API on http://localhost:${ENV.PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error('Failed to start application', err);
  process.exit(1);
});
