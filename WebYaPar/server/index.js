import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routes/route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// app.use(bodyParser.text({ limit: '200mb' }));
// var jsonParser = bodyParser.json({limit:1024*1024*10, type:'application/json'}); 
// var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*10,type:'application/x-www-form-urlencoded' });
// app.use(jsonParser);
// app.use(urlencodedParser);


app.use("/api", router);

const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error}: did not connect`);
  });
