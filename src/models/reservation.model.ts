import { model } from 'mongoose';
import type { IReservation } from '@/interfaces/reservations/IReservation';
import reservationSchema from '@/schemas/reservation.schema';

const ReservationModel = model<IReservation>('Reservations', reservationSchema);

export default ReservationModel;
