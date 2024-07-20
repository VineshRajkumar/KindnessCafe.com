import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import PaymentDetail from "@/models/PaymentDetail";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";

import User from "@/models/User";


export const POST = async (req) => {
    
    try {
        await connectDb();
        let body = await req.formData();
        body = Object.fromEntries(body);
       
        

        // Check if razorpay_order_id is present on server
        let p = await PaymentDetail.findOne({ oid: body.razorpay_order_id });
        if (!p) {
            return NextResponse.json({ success: false, message: "Order Id not Found" });
        }

        let user = await User.findOne({ username: p.to_user }).lean();
        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" });
        }

        // Verify the payment
        let isValid = validatePaymentVerification(
            { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
            body.razorpay_signature,
            user.razorpaySecret
        );

        if (isValid) {
            // Update payment status
            const updatedPayment = await PaymentDetail.findOneAndUpdate(
                { oid: body.razorpay_order_id },
                { done: "true" },
                { new: true }
            );
            
            //console.log("Updated payment:", updatedPayment);
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`);
        } else {
            return NextResponse.json({ success: false, message: "Payment Verification Failed" });
        }
    } catch (error) {
        //console.error("Error processing payment:", error);
        return NextResponse.json({ success: false, message: "Server Error" });
    }
};