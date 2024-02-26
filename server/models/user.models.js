const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName:{ type: String, required: true },
    phoneNumber:  { type: Number, required: true, unique: true },
    cin:  { type: String},
  });

  const user=mongoose.model("user",userSchema) 
  module.exports =user