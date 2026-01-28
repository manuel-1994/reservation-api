import type { Response } from 'express';
import type { IUserRequest } from '@/interfaces/users/IUserRequest';
import type { IUserJWTPayload } from '@/interfaces/users/IUserJWTPayload';
import httpResponse from '@/utils/httpResponse';
import ReservationModel from '@/models/reservation.model';

async function createReservation(req: IUserRequest, res: Response) {
  try {
    const { name, lastName, age, address, email } = req.user as IUserJWTPayload;
    const now = new Date();
    const reservationDate = now.toISOString().split('T')[0];
    const reservationHour = now.toTimeString().substring(0, 5);

    const reservation = {
      name,
      lastName,
      age,
      address,
      email,
      reservationDate,
      reservationHour,
      ...req.body,
    };
    await ReservationModel.create(reservation);
    return httpResponse.Created(res, reservation);
  } catch (error: any) {
    return httpResponse.InternalServerError(res, error.message);
  }
}
export default createReservation;
