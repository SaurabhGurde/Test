import mongoose from "mongoose";

const { Schema } = mongoose;

const Webyapar_user = new Schema({
    UserID:{
        type:String,
        unique:true,
        required:true
    },
    password:{
      type:String,
      required:true
    },
    name:String,
    imgDATA:String,
    Approved:Boolean

  });

  const User = mongoose.model(
    "Webyapar_user",
    Webyapar_user
  );
  export default User;
  