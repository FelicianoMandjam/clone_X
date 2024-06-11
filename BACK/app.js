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


// MIDDLEWARES
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", true);
    return next();
  });
  
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message  || "Something went wrong";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });
app.use(cookieParser())



// URLS API PREFIX
app.use("/api/user", userRouter);
app.use("/api/tweet",tweetRouter);
// app.use("/api/like",);
// app.use("/api/messages",);
// app.use("/api/reset",);




export default app;