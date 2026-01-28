import type { Request, Response } from 'express';
import ReservationModel from '@/models/reservation.model';
import httpResponse from '@/utils/httpResponse';

const errorMessage = 'Reservation not found';

async function deleteReservation(req: Request, res: Response) {
  try {
    const reservation = await ReservationModel.findByIdAndDelete(req.params.id);
    if (reservation) return httpResponse.NoContent(res);
    httpResponse.NotFound(res, errorMessage);
  } catch (error: any) {
    if (error.name === 'CastError')
      return httpResponse.NotFound(res, errorMessage);
    httpResponse.InternalServerError(res, error.message);
  }
}

export default deleteReservation;
