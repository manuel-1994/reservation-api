import { Router } from 'express';
import {
  createReservation,
  deleteReservation,
  getMyReservation,
  getReservationById,
  getReservations,
  updateReservation,
} from '@/controllers/reservations';
import verifyAuthToken from '@/middlewares/authValidation';

function reservationRoutes(mainRouter: Router) {
  const router = Router();
  mainRouter.use('/reservations', verifyAuthToken, router);

  router.post('/', createReservation);
  router.get('/', getReservations);
  router.get('/myReservation', getMyReservation);
  router.get('/:id', getReservationById);
  router.patch('/:id', updateReservation);
  router.delete('/:id', deleteReservation);
}

export default reservationRoutes;
