import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import SecurityBoat_CRUD_data from "./models/SecurityBoat_CRUD.js";
import userRouter from "./routes/user.js";
import Data from "./models/SecurityBoat_CRUD.js";
import { data } from "./data.js";
import dataRouter from "./routes/data.js";
import adminRouter from "./routes/admin.js"
import fetch from "./middleware/auth.js";
const app = express();



dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouter);
app.use("/data", fetch, dataRouter);
app.use("/admin", adminRouter)

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async() => {
    // await Data.deleteMany({})
    // await Data.insertMany(data)
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error}: did not connect`);
  });
