export type iBook = {
  _id?: number;
  name: string;
  author: string;
  publicationDate: string;
  genre: string;
  summery: string;
  user: string;
};

export type iComment = {
  _id?: number;
  user: string;
  book: string;
  comment: string;
};
