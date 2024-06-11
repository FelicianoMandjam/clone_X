import express from "express";
import * as userController from '../controllers/user.controller.js';


const router = express.Router()

router.post('/sign', userController.login)
router.post("/add", userController.post)
router.get("/all", userController.getAllUsers)
router.post("/register", userController.register)
// router.delete("/delete/:id", userController.deleteById)
// router.put("/update/:id", userController.updateById)

export default router;