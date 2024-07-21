import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import PaymentDetail from "@/models/PaymentDetail";
import connectDb from "@/db/connectDb";


export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider=="github"||account.provider=="google"){
        //connect to mongodb
        await connectDb() 
        //check if user exists
        const currentUser = await User.findOne({email:email})
        console.log(currentUser)
        if(!currentUser){
          //create a new user if he doesnot exists
          const newUser = await User.create({
    
            email: user.email,    
            username:user.email.split("@")[0],
            followers: 0,
            razorpayId:"",
            razorpaySecret:"",
            
          })
          
          
        }
        
        
        return true
      }
    },
    async session({ session, user, token }) { //checks existing user in database
      const dbUser = await User.find({email:session.user.email})
      session.user.name= dbUser.username
      return session
    },
  },
});

export { authoptions as GET, authoptions as POST };
