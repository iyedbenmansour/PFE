const mongoose=require("mongoose")

const bookingSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    carModel: { type: String, required: true },
    licensePlate:{ type: String, required: true },
    phoneNumber:  { type: Number, required: true },
    bookingStartDate:  { type: Date ,required: true },
    bookingEndDate:  { type: Date ,required: true},
  });

  const booking=mongoose.model("booking",bookingSchema) 
  module.exports =booking