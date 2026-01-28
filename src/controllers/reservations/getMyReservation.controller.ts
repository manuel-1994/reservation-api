import type { Response } from 'express';
import ReservationModel from '@/models/reservation.model';
import httpResponse from '@/utils/httpResponse';
import type { IUserRequest } from '@/interfaces/users/IUserRequest';

const errorMessage = 'Reservation not found';

async function getMyReservation(req: IUserRequest, res: Response) {
  try {
    const reservation = await ReservationModel.findOne({
      userId: req.user?._id,
    }).select('-userId');
    if (reservation) return httpResponse.Ok(res, reservation);
    return httpResponse.NotFound(res, errorMessage);
  } catch (error: any) {
    if (error.name === 'CastError')
      return httpResponse.NotFound(res, errorMessage);
    return httpResponse.InternalServerError(res, error.message);
  }
}

export default getMyReservation;
