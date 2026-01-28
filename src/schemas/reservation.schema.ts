import type { IReservation } from '@/interfaces/reservations/IReservation';
import { Schema } from 'mongoose';

const reservationSchema = new Schema<IReservation>(
  {
    reservationDate: { type: String, required: true },
    reservationHour: { type: String, required: true },
    ticketNumber: { type: Number, required: true, min: 1, max: 4 },
    userId: { type: Schema.Types.ObjectId, Ref: 'Users' },
  },
  {
    timestamps: true,
  }
);

export default reservationSchema;
