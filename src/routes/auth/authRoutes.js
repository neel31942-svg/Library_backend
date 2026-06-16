import { Router } from "express";
import signUpApi from "../../controllers/auth/signup-api.js";
import signInApi from "../../controllers/auth/signin-api.js";
import getAllBooks from "../../controllers/books/get-all-books.js";
import addStudent from "../../controllers/students/addstudent-api.js";
import getallStudents from "../../controllers/students/getAllStudents.js";

const authRouter = Router();


authRouter.post("/sign-up", signUpApi);
authRouter.post("/sign-in",signInApi)
authRouter.post("/add-student", addStudent);
authRouter.get("/get-all-students", getallStudents);
authRouter.get("/get-all-books",getAllBooks);
authRouter.delete("/")

export default authRouter;