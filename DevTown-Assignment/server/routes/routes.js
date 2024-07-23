import express from 'express';
import { getData, getFilterData } from '../controllers/data.js';
const router = express.Router();

router.post("/getdata", getData);
router.post("/getFilterdata", getFilterData);

export default router