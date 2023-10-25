import mongoose from "mongoose";

const { Schema } = mongoose;

const SecurityBoat_USER_Schema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

  });

  const User = mongoose.model(
    "SecurityBoat_USER_data",
     SecurityBoat_USER_Schema
  );
  export default User;
  