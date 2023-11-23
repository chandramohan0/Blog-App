import mongoose from "mongoose";


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.pg3qzxg.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log("Database connected succesfully");
    } catch (error) {
        console.log(`Error while connecting with the database: ${error}`);
    }
};

export default Connection;