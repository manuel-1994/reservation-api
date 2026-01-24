import type { NextFunction, Request, Response } from 'express';
import ReservationModel from '../../models/reservation.model';

async function deleteReservation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const reservation = await ReservationModel.findByIdAndDelete(req.params.id);
    if (reservation) {
      res.status(204).json();
      return;
    }
    res.status(404).json({ message: 'Reservation not found' });
  } catch (error: any) {
    if (error.name === 'CastError') {
      res.status(404).json({ message: 'Reservation not found' });
      return;
    }
    next(error);
  }
}

export default deleteReservation;
