import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const jwtSecret = "hello world";

export const signup = async (req, res) => {
    console.log(req.body)
    try {
        const {
            name,
            email,
            password,
            
        } = req.body;

        const salt = await bcrypt.genSalt(2);
        const passwordHash = await bcrypt.hash(password, salt); 

        const newUser = new User({
            name,
            email,
            password : passwordHash,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
};

export const login = async (req, res) => {

    let success = false;

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }) //{email:email} === {email}
        if (!user) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }

        const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
        if (!pwdCompare) {
            return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
        }
        
      const userEmail = user.email
       const userName = user.name;
        
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, jwtSecret);
        res.status(200).json({ userEmail, userName, success, authToken })


    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error")
    }
}

export const getUser = (req,res)=>{
    const {
        email
        
    } = req.body;

    try{
        const getUser = User.findOne({ email })
        if(getUser){
            res.status(200).json({user:{
                email:getUser.email,
                name:getUser.name
            }})
        }
        else{
            res.status(500).send("server error")
        }
    }
    catch(error){
        res.status(500).json({ error:error.message })
    }
}

