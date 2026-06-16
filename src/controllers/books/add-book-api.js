
import { Book } from "../../schema/book/book-model.js";


const addBook = async (req, res) => {
  try {
      const bookData = req.body;
      console.log(bookData);
    const imageData = req.file;
    if (!bookData.bookName || !bookData.category || !bookData.description) {
      return res.status(422).json({
        message: "All fields are Required",
        status: 422,
      });
    }

    const newBook = new Book({
      bookName: bookData.bookName,
      category: bookData.category,
      discription: bookData.discription,
      author: bookData.author,
      copies: bookData.copies,
      status: bookData.status,
      price: bookData.price,
      image: imageData ? imageData.filename : null,
    });

    await newBook.save();
    return res.status(201).json({
      message: "Boook Added Successfully",
      status: 201,
      book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server Error",
      status: 500,
    });
  }
};
export default addBook;
