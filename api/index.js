import express from 'express';
import connectToMongoDb from './db/connect.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
dotenv.config();




const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(cookieParser());


connectToMongoDb(process.env.MONGODBURL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });
    
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});