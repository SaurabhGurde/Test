import express from 'express';
import User from '../model/User.js';

const router = express.Router();
const createUser = async (req,res)=>{
     console.log(req.body)
    try {
        await User.create(req.body)
        // console.log("first")
        res.status(200).json({success:true})
    } catch (error) {
        console.log("error")
        res.status(500).json({error:"fail"})
    }
}

const loginUser = async (req,res)=>{
    console.log(req.body)
   try {
       await User.findOne(req.body)
    //    console.log("first")
       res.status(200).json({success:true})
   } catch (error) {
       console.log("error")
       res.status(500).json({error:"fail"})
   }
}

const updateUser = async (req,res)=>{
    console.log(req.params)
   try {
       await User.find(req.body)
    //    console.log("first")
       res.status(200).json({success:true})
   } catch (error) {
       console.log("error")
       res.status(500).json({error:"fail"})
   }
}

router.post("/createuser",  createUser)


router.post("/loginuser", loginUser  )
router.get("/updateuser",   updateUser)


export default router