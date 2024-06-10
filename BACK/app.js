import express from "express";
import "./models/index.js"
import userRouter from "./routes/user.route.js"
import cookieParser from 'cookie-parser'
import cors from 'cors';


//routes

// APP
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors())
app.use(cookieParser())


// URLS API PREFIX
app.use("/api/user", userRouter);
// app.use("/api/tweet",);
// app.use("/api/like",);
// app.use("/api/messages",);
// app.use("/api/reset",);

export default app;