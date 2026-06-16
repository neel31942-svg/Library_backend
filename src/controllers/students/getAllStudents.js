const getallStudents = async (req, res) => {


    try {
        const students = await Student.find();
        if (allStudents.length === 0) {
            return res.status(404).json({
                message: "No students found",
                status: 404,
            });
        }
        res.status(200).json({
            message: "Students fetch successfully",
            status: 200,
            data: allStudents,
        })
        //depend on the data you want to send

    }catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
        });
    }
}
export default getallStudents;
