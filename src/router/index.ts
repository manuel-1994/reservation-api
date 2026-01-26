import type { Express } from 'express';
import { Router } from 'express';
import reservationRoutes from './reservations.routes';
import usersRoutes from './users.routes';
import authRoutes from './auth.routes';

function router(app: Express) {
  const mainRouter = Router();
  app.use('/api', mainRouter);

  return [
    reservationRoutes(mainRouter),
    usersRoutes(mainRouter),
    authRoutes(mainRouter),
  ];
}

export default router;
