import express from 'express';
import { addData, deleteUserData, getData, updateUserData } from '../controllers/data.js';
const router = express.Router();

router.post("/getdata", getData )
router.post("/adduserdata", addData )
router.post("/updateuserdata", updateUserData )
router.post("/deleteuserdata", deleteUserData )
export default router