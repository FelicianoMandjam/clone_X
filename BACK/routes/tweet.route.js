import express from "express";
import * as tweetController from "../controllers/tweet.controller.js";

const router = express.Router();

router.post("/", tweetController.add)
router.get('/', tweetController.findAll)
// router.put("/put", userController.put)
// router.delete("/delete", userController.delet)

export default router;