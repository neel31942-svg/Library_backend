import { model, Schema } from "mongoose";


const studentSchema = new Schema({
    name: String,
    email: String,
    age: String,
    gender: String,
    applyFor: String,
    fatherName:String,
    motherName:String,
    qualification:String,
    cardNo:String,
    contect:String,
    seatNo:String,


});

export const Student =  model("student", studentSchema);