import express from 'express';
const router = express.Router();
import { signup, login, getUser } from '../controller/user.js';
import fetch from "../middleware/auth.js";

router.post("/login", login);
router.post("/signup", signup);

router.post("/getuser", getUser);

export default router