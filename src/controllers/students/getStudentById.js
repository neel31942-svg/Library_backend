import { Student } from "../../models/students/student-model.js";

const getStudentById = async (req, res) => {
    try {
        //id is coming into the params (/:id)
        // http://localhost:9000/student/get-student/4

        const studentId = req.params;
        const studentDetails = await Student.findById(studentId);
        if (!studentDetails) {
            return res.status(404).json({
                message: "student Not found",
                status: 404
            });
        }
        return res.status(200).json({
            message: "student found successfully",
            status: 200,
            student: studentDetails,
        });
    } catch (error) {
        return res.status(500).json({
            message: "INTERNAL  SERVER ERROR",
            status: 500
        })
    }


}
export default getStudentById;