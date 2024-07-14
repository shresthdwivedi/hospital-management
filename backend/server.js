import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import { dbConneciton } from './database/dbConnection.js';
import cloudinary from "cloudinary";

const app = express();
config({ path: './config/config.env' });

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

dbConneciton();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})