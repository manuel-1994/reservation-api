import type { Request, Response } from 'express';
import ReservationModel from '../../models/reservation.model';
import httpResponse from '../../utils/httpResponse';

async function createReservation(req: Request, res: Response) {
  try {
    const newReservation = await ReservationModel.create(req.body);
    return httpResponse.Created(res, newReservation);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default createReservation;
