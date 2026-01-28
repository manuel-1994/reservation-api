export interface IReservation {
  _id: string;
  reservationDate: string;
  reservationHour: string;
  ticketNumber: number;
  userId?: string;
}
