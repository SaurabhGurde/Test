import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

 
const prisma = new PrismaClient();
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/adddata", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Some missing field are missing" });
    }

    const isUserExistsByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (isUserExistsByEmail) {
      console.log("User with this credentials already exists");
      return res.status(400).json({ error: "User with these email already exists" });
    }
    const isUserExistsByPhone = await prisma.user.findUnique({
      where: { phone },
    });
    
    if (isUserExistsByPhone) {
      console.log("User with this credentials already exists");
      return res.status(400).json({ error: "User with thesePhone number exists already exists" });
    }

    const newUser = await prisma.user.create({
      data: req.body,
    });

    res.status(200).json({success: true, data: newUser});
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.code === "P2002") {
      return res.status(400).json({ error: "Unique constraint failed" });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
