import mongoose from 'mongoose';
import { app } from './app';


const CONNECTION_URL: string = 'mongodb://localhost:27017/ProjectWorkCode';
const PORT = 3000;

const DB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`server is online at http://localhost:${PORT}`);
        });
    } catch (error) {

        console.error('Error connecting to MongoDB:', error);
    }
};

export default DB();