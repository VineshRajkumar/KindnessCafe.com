import mongoose from "mongoose";
const { Schema, model } = mongoose;
const PaymentSchema = new Schema({
  name: { type: String, required: true }, //person giving payment
  to_user: { type: String, required: true }, //user who gets the payment
  oid: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});


export default mongoose.models.Payment || model("Payment", PaymentSchema);