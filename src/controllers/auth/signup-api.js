import { User } from "../../models/auth/user-model.js";
import bcrypt from "bcrypt";

const signUpApi = async (req, res) => {
    try {
        const userData = req.body;
        //validation
        if (userData.name === "" || userData.email === "" || userData.password === "") {
            return res.status(422).json({ message: "all Input Fields are Required " });
        }


        //Email validation to prevent duplicate acccounts
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(409).json({ message: "this email is already in used. use any  other Email." })

        }


        //hashing  pAssword
        const hashPassword = await bcrypt.hash(userData.password, 10);



        ///its time to store data in database
        const newUser = new User({
            name: userData.name,
            email: userData.email,
            // contact: userData.contact,
            password: hashPassword,
        });


        
        
        await newUser.save();
        return res.status(201).json({
            message: "New user has been registered successfully",
            user: newUser,

        });
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
}
export default signUpApi;
