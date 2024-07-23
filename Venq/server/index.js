dotenv.config(); 
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Data from "./modal/data.js"

const app = express();

app.use(express.json());
app.use(bodyParser.json({extended: true, limit: "100mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "100mb",  }));
app.use(cors());

app.use("/adddata", async(req, res) => {
    try {
        
        await Data.create(req.body)
        res.status(200).json({success:true})
    } catch (error) {
        res.status(500).send("Server Error")
    }
});
app.use("/getdata", async(req, res) => {
    try {
       
       const data = await Data.find({})
        res.status(200).json({success:true, data})
    } catch (error) {
        res.status(500).send("Server Error")
    }
});

const PORT = process.env.PORT || 9000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Database connection error: ${error}`);
  });
