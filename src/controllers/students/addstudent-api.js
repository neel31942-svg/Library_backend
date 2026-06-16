import { User } from "../../models/auth/user-model.js";
import { Student } from "../../models/students/student-model.js";

const addStudent = async (req, res) => {
  try {
    const studentData = req.body;
    // validation  consition hai agar ye section khali ho toh
    if (
      // user data.jo frontend mai code likha thaus code ka
      studentData.name === "" ||
      studentData.email === "" ||
      studentData.age === "" ||
      studentData.gender === "" ||
      studentData.applyFor === "" ||
      studentData.fatherName === "" ||
      studentData.motherName === "" ||
      studentData.qualification === "" ||
      studentData.cardNo === "" ||
      studentData.contect === "" ||
      studentData.seatNo === ""
    ) {
      return res
        .status(422)
        .json({ message: "All Input Fields are Requird !" });
    }
    // email validation to privent duplicate accounts
    const existingStudent = await Student.findOne({ email: studentData.email });

    // security leval
    if (existingStudent) {
      return res.status(409).json({
        massage: `This email is already in used. Use any other Email: ${studentData.email}`,
      });
    }

    // it is time to store data in database
    const student = new Student(studentData);

    await student.save();
    return res.status(201).json({
      message: "New user has been registered succesfully",
      student: student,
    });
  } catch (err) {
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};
export default addStudent;