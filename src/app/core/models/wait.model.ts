export interface WaitModel {
  idWaitReservation:  number;
  idUser:             number;
  idBook:             number;
  userName:           string;
  bookName:           string;
  priority:           string;
  dateReservation:    string;
  dateReservationEnd: string;
  status:             number;
  isActive:           boolean;
  createdAt:          string;
}