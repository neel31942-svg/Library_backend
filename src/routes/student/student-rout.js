import { Router } from "express";
import authMiddleware from "../../middleware/authmiddleware.js";
import addStudent from "../../controllers/students/addstudent-api.js";
import getallStudents from "../../controllers/students/getAllStudents.js";
import deleteStudent from "../../controllers/students/deleteStudent.js";
import getStudentById from "../../controllers/students/getStudentById.js";

const studentRoutes = Router();

studentRoutes.post("/add-student", addStudent);
studentRoutes.get("/get-all-students", authMiddleware, getallStudents);
studentRoutes.get("/get-student/:id", authMiddleware, getStudentById)
studentRoutes.delete("/deleteStudent", deleteStudent);


export default studentRoutes;