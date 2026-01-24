import { model } from 'mongoose';
import reservationSchema from '../schemas/reservation.schema';

type ReservationDoc = {
  _id: 'string';
  reservationDate: 'String';
  reservationHour: 'String';
  name: 'String';
  lastName: 'String';
  age: 'Number';
  address: 'String';
  email: 'String';
  ticketNumber: 'Number';
  createdAt: 'Date';
  updatedAt: 'Date';
};

const ReservationModel = model<ReservationDoc>(
  'Reservation',
  reservationSchema
);

export default ReservationModel;
