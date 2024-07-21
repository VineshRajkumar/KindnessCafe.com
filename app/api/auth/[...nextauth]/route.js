import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/User";
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
      if (account.provider === "github" || account.provider === "google") {
        try {
          // Connect to MongoDB
          await connectDb();

          // Check if user exists
          const currentUser = await User.findOne({ email: email });
          console.log(currentUser);

          if (!currentUser) {
            // Create a new user if they do not exist
            await User.create({
              email: user.email,
              username: user.email.split("@")[0],
              followers: 0,
              razorpayId: "",
              razorpaySecret: "",
            });
          }

          return true;
        } catch (error) {
          console.error('Error during sign in callback:', error);
          return false;
        }
      }
      return false;
    },
    async session({ session, user, token }) {
      try {
        // Check existing user in database
        await connectDb();
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

export { authoptions as GET, authoptions as POST };

