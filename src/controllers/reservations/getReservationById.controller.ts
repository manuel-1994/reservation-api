import type { Request, Response } from 'express';
import ReservationModel from '../../models/reservation.model';
import httpResponse from '../../utils/httpResponse';

const errorMessage = 'Reservation not found';

async function getReservationById(req: Request, res: Response) {
  try {
    const reservation = await ReservationModel.findById(req.params.id);
    if (reservation) return httpResponse.Ok(res, reservation);
    return httpResponse.NotFound(res, errorMessage);
  } catch (error: any) {
    if (error.name === 'CastError')
      return httpResponse.NotFound(res, errorMessage);
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default getReservationById;
