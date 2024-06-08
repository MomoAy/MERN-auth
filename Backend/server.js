import cookieParser from "cookie-parser";
import express from "express";
import dotenv from 'dotenv';

import { errorHandler, notFound } from "./middleware/error_middleware.js";
import userRoutes from './Routes/user_routes.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port ${port}`));
