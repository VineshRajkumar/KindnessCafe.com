"use server"; //work done on server side to connect razor pay
import Razorpay from "razorpay";
import PaymentDetail from "@/models/PaymentDetail";
import connectDb from "@/db/connectDb";
import User from "@/models/User";


export const getRazorpaySecretByUsername = async (username) => {
  await connectDb();
  const user = await User.findOne({ username }).lean();
  if (!user) throw new Error("User not found");
  return user.razorpaySecret;
};
const getRazorpayCredentials = async (email) => {
  await connectDb();

  const user = await User.findOne({ email })
  
  if (!user) throw Error("User not found");
  return {
    key_id: user.razorpayId,
    key_secret: user.razorpaySecret,
  };
};
export const initiate = async (amount, to_username, paymentform,email) => {
    //TO CREATE AN ORDER
  await connectDb();
  const { key_id, key_secret } = await getRazorpayCredentials(email);
  var instance = new Razorpay({
    // key_id: process.env.NEXT_PUBLIC_KEY_ID,
    // key_secret: process.env.KEY_SECRET,
    key_id,
    key_secret,
  });

  
  let options ={
    amount:Number.parseInt(amount),
    currency: "USD",
  }
  let x = await instance.orders.create(options)

  //create a payment object to show pending payment in database

  await PaymentDetail.create({oid: x.id,amount:amount,to_user:to_username,name:paymentform.name,message:paymentform.message})
  return x
};

export const fetchuser =  async (username)=>{
  await connectDb()
  let u = await User.findOne({username:username})
  let user = u.toObject({flattenObjectIds:true})
  return user
}

export const fetchpayments =  async (username)=>{
  await connectDb()
  // console.log('Database connected');
  //find all payments sorted by decresing order of amount and flatten object
  let p = await PaymentDetail.find({to_user:username,done:true}).lean()

  return p
}

export const updateFollowers = async (newFollowerCount, email) => {
  await connectDb();

  await User.updateOne(
    { email },
    { $set: { followers: newFollowerCount } }
  );
};

export const razorpayId = async (Id, email) => {
  await connectDb();

  await User.updateOne(
    { email },
    { $set: { razorpayId: Id  } }
  );
};
export const razorpaySecret = async (Secret, email) => {
  await connectDb();

  await User.updateOne(
    { email },
    { $set: { razorpaySecret: Secret } }
  );
};