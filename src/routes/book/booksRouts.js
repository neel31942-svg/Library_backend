import { Router } from "express";
import authMiddleware from "../../middleware/authmiddleware.js";
import getAllBooks from "../../controllers/books/get-all-books.js";

const bookRoutes = Router();

bookRoutes.get("/get-all-books",authMiddleware, getAllBooks);

export default bookRoutes;