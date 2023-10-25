import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
var jwtSecret = process.env.JWTSECRET;
const fetch =  (req,res,next)=>{
    // get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Invalid Auth Token"})

    }
    try {
        const data =  jwt.verify(token,jwtSecret);
        next();
        
    } catch (error) {
        res.status(401).send({error:"Invalid Auth Token"})
    }

}
export default fetch;