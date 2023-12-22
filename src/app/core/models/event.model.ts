export interface EventModel {
  _id:         string;
  idUser:      number;
  user:        string;
  book:        Book;
  description: string;
  registered:  string;
  createdAt:   string;
  updatedAt:   string;
}

export interface Book {
  _id:       number;
  title:     string;
  code:      string;
  createdAt: string;
  updatedAt: string;
}