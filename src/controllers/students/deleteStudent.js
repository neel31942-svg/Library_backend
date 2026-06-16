import {Student} from "../../models/students/student-model.js";

const deleteStudent=async(req ,res)=>{
try{
    const{id}= req.params;
    console.log(id);
    const StudentData= await Student.findByIdAndDelete(id);
    console.log("Sttudent Datta",StudentData);
        
}catch(error){
    console.log("Error");
    
}

}
export default deleteStudent;   