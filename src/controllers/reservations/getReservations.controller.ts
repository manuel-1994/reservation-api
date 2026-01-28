import type { Request, Response } from 'express';
import ReservationModel from '@/models/reservation.model';
import httpResponse from '@/utils/httpResponse';

async function getReservations(req: Request, res: Response) {
  try {
    const reservations = await ReservationModel.find().populate({
      path: 'userId',
      model: 'Users',
      select: 'email name lastName age address -_id',
    });

    return httpResponse.Ok(res, reservations);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default getReservations;
