import { Router } from 'express';
import {
  createReservation,
  deleteReservation,
  getReservationById,
  getReservations,
  updateReservation,
} from '../controllers/reservations';

function reservationRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/reservations', router);

  router.post('/', createReservation);
  router.get('/', getReservations);
  router.get('/:id', getReservationById);
  router.patch('/:id', updateReservation);
  router.delete('/:id', deleteReservation);
}

export default reservationRoutes;
