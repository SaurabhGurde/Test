import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({

 "title":String,
 "annualized-return":String,
 'annual-appreciation':String,
 'Cost':String,


});

const Data = mongoose.model(
  "venq-data",
  dataSchema
);
export default Data;
