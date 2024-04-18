export interface Book {
  _id: String;
  title: String;
  description: String;
  coverImage: String;
  bookFile: String;
  author: User;
  createdAt: String;
  updatedAt: String;
  __v: Number;
}

export type User = {
  name: String;
  _id: String;
};
