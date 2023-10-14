import express from "express";
import DrrData from "../models/DrrData.js";
import mongoose from 'mongoose';

const router = express.Router();

router.post("/adddata", async (req,res)=>{
    
    try {
       const newDrrData = new DrrData(req.body);
       const savedDrrData = await newDrrData.save();
       res.status(200).json(savedDrrData);
     

    } catch (error) {
        res.status(500).json({error: error.message})
    }



});

router.post("/getdata", async(req,res)=>{
    try {
        
       const fetched_data = await mongoose.connection.db.collection("drrdatas");
       const data = await fetched_data.find({}).toArray()
       res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

export default router;


