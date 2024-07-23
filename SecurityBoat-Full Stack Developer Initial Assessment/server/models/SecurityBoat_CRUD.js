import mongoose from "mongoose";

const SecurityBoat_CRUD_Schema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },

  crud_data: [
    {
      
      note: String,
    }
  ],
});

const Data = mongoose.model(
  "SecurityBoat_CRUD_data",
  SecurityBoat_CRUD_Schema
);
export default Data;
