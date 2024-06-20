import mongoose from 'mongoose';


const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.pg3qzxg.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Blog-App`
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;