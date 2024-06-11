import express from "express";
import "./models/index.js"
import userRouter from "./routes/user.route.js"
import cookieParser from 'cookie-parser'
import cors from 'cors';
import tweetRouter from "./routes/tweet.router.js";
import { ENV } from "./config/env.js";


//routes

// APP
const app = express();

const corsOptions={
    origin : `http://localhost:3001`, 
    optionSuccessStatus : 200,
    Credential : true , 
}
// MIDDLEWARES
app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser())


// URLS API PREFIX
app.use("/api/user", userRouter);
app.use("/api/tweet",tweetRouter);
// app.use("/api/like",);
// app.use("/api/messages",);
// app.use("/api/reset",);




export default app;