import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import multer from "multer";
const upload = multer();


const router = Router()

router.route("/signup").post(registerUser)

export default router