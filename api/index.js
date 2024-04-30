import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouters from './routes/auth.route.js';
import userRouters from './routes/user.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

const app = express();

app.use(express.json());

app.use(cookieParser);

app.listen(3000, () => {
    console.log('Server listening on Port 3000');
});

app.use('/api/auth', authRouters);
app.use('/api/user', userRouters);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        status: false,
        error: message,
        statusCode

    });
})