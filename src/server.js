import express from "express";
import mongoose, { model, Schema } from "mongoose";
import connectDB from "./config/dbConfig.js";
import authRouter from "./routes/auth/authRoutes.js";
import cors from 'cors';
import path from "path";
import studentRoutes from "./routes/student/student-rout.js";
import bookRoutes from "./routes/book/booksRouts.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const port = 9000;
const app = express();

app.use( express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json())
// app.get("/neel",(req,res)=>{
//     res.send("HEllO i am monkey the LUFFY");
// })

connectDB();

// SCHEMA DESIGN

// app.post("/sign-in",async(req, res)=>{
//1 schema done
//2 Query with our database

//     const dbuser=  new User({
//         name:"neeraj",
//         email:"neel@gmail.com",          
//         age:21
//     });
//     await dbuser.save();
//     res.send(200);
//     console.log(dbuser);

// })

// const user = model("user", userSchema);

app.post("/sign-up", authRouter);
app.post("/sign-in", authRouter);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);


app.listen(port, () => {
    console.log("server is running at http://localhost:9000");

})
