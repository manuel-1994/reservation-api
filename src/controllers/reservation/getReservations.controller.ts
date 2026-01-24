import type { NextFunction, Request, Response } from 'express';
import ReservationModel from '../../models/reservation.model';

async function getReservations(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const reservations = await ReservationModel.find();
    res.json(reservations);
  } catch (error) {
    next(error);
  }
}

export default getReservations;
