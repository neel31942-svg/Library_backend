import { User } from "../../models/auth/user-model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signInApi = async (req, res) => {
    try {
        const userData = req.body;
        console.log(req.body);
        ///frontend data validation for missing input fields

        if (userData.name===""||  userData.email === "" || userData.password === "") {
            return res.status(422).json({ message: "all Input Fields are Required " });
        }
        const existingUser = await User.findOne({ email: userData.email });
        /// if user not exist in db
        if (!existingUser) {
            return res.status(404).json({
                message: `User not found with this email:${userData.email}`,
                status: 404
            });

        }
        /// if user exist in db
        const passwordValidate = await bcrypt.compare(userData.password, existingUser.password);
        console.log(passwordValidate);
        
        if (!passwordValidate) {
            return res.status(401).json({
                message: "Invalid Credentials",
                status: 401
            });
        }
        const token = jwt.sign(
            {
                userId: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,

            },
            "DWA1234567",
            {
                expiresIn: "1d"
            }
        );
        // after all validation  if user is validate successfully
        return res.status(200).json({
            status: 200 ,
            message: "login succesfully",
            token,
            user: {
                userId: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,

            }

        })


    } catch (error) {
        console.log("INTERNAL SERVER ERROR");
        return res.status(500).json({ message: "INTERNAL SERVER ERROR " });  
    }

}


export default signInApi;