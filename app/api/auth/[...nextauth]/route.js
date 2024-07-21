// In your NextAuth API route file, for example: /pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
import connectDb from "@/db/connectDb";

// Config for Vercel function
export const config = {
  runtime: 'nodejs',
  maxDuration: 20 // Maximum duration in seconds
};

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "github" || account.provider === "google") {
          await connectDb(); // Connect to MongoDB
          const currentUser = await User.findOne({ email: user.email });

          if (!currentUser) {
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
              followers: 0,
              razorpayId: "",
              razorpaySecret: "",
            });
          }

          return true;
        }
      } catch (error) {
        console.error('Error during sign in callback:', error);
        return false;
      }
    },
    async session({ session, user, token }) {
      try {
        await connectDb(); // Connect to MongoDB
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
        }
        return session;
      } catch (error) {
        console.error('Error during session callback:', error);
        return session;
      }
    },
  },
});

