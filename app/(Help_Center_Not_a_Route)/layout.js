//NOTE- those with <-- symbol are NextAuth authentication
import { Inter } from "next/font/google";
import "../globals.css"; //since global.css file is outside so two times dot ..
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; //<--

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help Center",
  description: "Knowledge Base | KindnessCafe.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionWrapper>
          {" "}
          <-- */}
          <div className="min-h-screen">{children}</div>
          <Footer />
        {/* </SessionWrapper>{" "}
        <-- */}
      </body>
    </html>
  );
}
