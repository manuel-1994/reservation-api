import type { Request, Response } from 'express';
import ReservationModel from '@/models/reservation.model';
import httpResponse from '@/utils/httpResponse';

async function getReservations(req: Request, res: Response) {
  try {
    const reservations = await ReservationModel.find().lean();
    return httpResponse.Ok(res, reservations);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default getReservations;
