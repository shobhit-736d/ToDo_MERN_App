import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@to-do-mern-app.99aqfnm.mongodb.net/todo?retryWrites=true&w=majority`;

const Connection = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection error:", error.message);
    }
};

export default Connection;