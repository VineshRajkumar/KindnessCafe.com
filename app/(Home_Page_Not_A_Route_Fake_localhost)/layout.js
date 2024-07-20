//NOTE- those with <-- symbol are NextAuth authentication
import { Inter } from "next/font/google";
import "../globals.css"; //since global.css file is outside so two times dot ..
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; //<--

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KindnessCafe.com - A Cup of Kindness in Every Brew",
  description: "Fueling positivity, one cup at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionWrapper>
          {" "}
          <-- */}
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        {/* </SessionWrapper>{" "} */}
        {/* <-- */}
      </body>
    </html>
  );
}
