// Import statements
import { Inter } from "next/font/google";
import "../globals.css"; // Correct relative path to globals.css
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizesFooter from "@/components/customizesFooter";
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; //<-- Ensure this component handles NextAuth properly
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

// Define Google font
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

  // Uncomment and use the checkUser function if needed
  // useEffect(() => {
  //   checkUser().then((exists) => {
  //     if (!exists) {
  //       notFound(); // Handle the case where user is not found
  //     }
  //   });
  // }, [params.username]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="min-h-screen">
            <Navbar /> {/* Include Navbar if needed */}
            {children}
            <Footer /> {/* Include Footer if needed */}
          </div>
          <CustomizesFooter />
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
        </SessionWrapper>
      </body>
    </html>
  );
}
