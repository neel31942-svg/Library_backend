import { Router } from "express";
import getAllBooks from "../../controllers/books/get-all-books.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const bookRoutes = Router();

bookRoutes.get("/get-all-books",authMiddleware, getAllBooks);

export default bookRoutes;