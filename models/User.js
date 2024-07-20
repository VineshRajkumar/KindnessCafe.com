import { razorpayId, razorpaySecret } from "@/actions/useractions";
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String },
  username: { type: String, required: true },
  followers:{type:Number, required: true},
  razorpayId:{type: String,default: ""},
  razorpaySecret:{type: String,default: ""},
  about: { type: String },
  website_url: { type: String },
  profilepic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || model("User", UserSchema);
