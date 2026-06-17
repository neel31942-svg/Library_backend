import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    bookName: String,
    category: String,
    description: String,
    author: String,
    copies: String,
    status: String,
    price: String,
    image: String,
  },
  { timestamps: true },
);
export const Book = model("books", bookSchema);