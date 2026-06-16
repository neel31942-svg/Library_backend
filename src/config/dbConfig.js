import mongoose from "mongoose";

const connectDB = async () => {
    // ERROR HANDLING
    try {
        await mongoose.connect('mongodb://neel1415_db_user:Neelmehta14@ac-h2m9drc-shard-00-00.enrbq8c.mongodb.net:27017,ac-h2m9drc-shard-00-01.enrbq8c.mongodb.net:27017,ac-h2m9drc-shard-00-02.enrbq8c.mongodb.net:27017/?ssl=true&replicaSet=atlas-p7vti4-shard-0&authSource=admin&appName=Cluster0');
        console.log("Database connected successfully");

    } catch (error) {
        console.error("Error while connecting with database:", error);


    }
}
export default connectDB;


// neel1415_db_user:Neel@141516