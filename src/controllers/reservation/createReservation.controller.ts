import type { Request, Response } from 'express';
import ReservationModel from '../../models/reservation.model';
import httpResponse from '../../utils/httpResponse';

async function createReservation(req: Request, res: Response) {
  try {
    const reservation = await ReservationModel.create(req.body);
    httpResponse.Created(res, reservation);
  } catch (error: any) {
    httpResponse.InternalServerError(res, error.message);
  }
}

export default createReservation;
