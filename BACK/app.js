import express from "express";
import "./models/index.js"
import userRouter from "./routes/user.route.js"

//routes

// APP
const app = express();

// MIDDLEWARES
app.use(express.json());

// app.use((req, res, next) =>{
//     res.status(200).json({status : 200});
//     next()
// })

// URLS API PREFIX
app.use("/api/user", userRouter);
// app.use("/api/tweet",);
// app.use("/api/like",);
// app.use("/api/messages",);
// app.use("/api/reset",);

export default app;