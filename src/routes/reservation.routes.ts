import { Router } from 'express';
import {
  createReservation,
  deleteReservation,
  getReservationById,
  getReservations,
  updateReservation,
} from '../controllers/reservation';

const router = Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.get('/:id', getReservationById);
router.patch('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;
