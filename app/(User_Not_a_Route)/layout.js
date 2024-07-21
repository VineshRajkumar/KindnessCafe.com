//NOTE- those with <-- symbol are NextAuth authentication

import { Inter } from "next/font/google";
import "../globals.css"; //since global.css file is outside so two times dot ..
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizesFooter from "@/components/customizesFooter";
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; //<--
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children, params }) {
  // const checkUser = async () => {
  //   let a = true;
  //   await connectDb();
  //   let u = await User.findOne({ username: params.username });
  //   if (!u) {
  //     a=false;
  //     return a;
  //   }
  //   else{
  //     return a;
  //   }
  // };
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="min-h-screen">{children}</div>
          <CustomizesFooter />
          <script src="https://cdn.lordicon.com/lordicon.js" async></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
        </SessionWrapper>{" "}
      </body>
    </html>
  );
}
