import express from "express";
import * as tweetController from "../controllers/tweet.controller.js";

const router = express.Router();

// router.get('/', userController.fetch)
router.post("/add", tweetController.add)
// router.put("/put", userController.put)
// router.delete("/delete", userController.delet)

export default router;