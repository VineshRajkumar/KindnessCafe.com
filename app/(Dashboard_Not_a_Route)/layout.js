//NOTE- those with <-- symbol are NextAuth authentication
import { Inter } from "next/font/google";
import "../globals.css"; //since global.css file is outside so two times dot ..
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; //<--
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard | KindnessCafe.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {" "}
          {/* <-- */}
          
          <div className="min-h-screen">{children}</div>
        </SessionWrapper>{" "}
        <script src="https://cdn.lordicon.com/lordicon.js" async></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        {/* <-- */}
      </body>
    </html>
  );
}