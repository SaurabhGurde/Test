import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/SecurityBoat_USER.js";
import fs from "jsonwebtoken";
import Data from "../models/SecurityBoat_CRUD.js";

dotenv.config();
var jwtSecret = process.env.JWTSECRET;

// Authentication a User, No login Requiered


export const signupUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(6);
        const securePass = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass,
        });
        await Data.create({
            email: req.body.email,
            crud_data:[]
        })
       
       
        const data = {
            user: {
                id: user._id,
            },
        };

        const authToken = jwt.sign(data, jwtSecret);
        

        res.status(200).json({ success: true, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
};
export const loginUser = async (req, res) => {
    let success = false
  

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  //{email:email} === {email}
       
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.status(200).json({ success, authToken })


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }
}
