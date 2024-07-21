// Importing necessary modules and components
import { Inter } from "next/font/google";
import "../globals.css"; // Importing global styles
import SessionWrapper from "@/components/SessionWrapper_for_NextAuth"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Dashboard | KindnessCafe.com",
};

// Root layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrapping children with SessionWrapper for NextAuth session management */}
        <SessionWrapper>
          <div className="min-h-screen">{children}</div>
        </SessionWrapper>
        {/* Adding external script and link tags */}
        <script src="https://cdn.lordicon.com/lordicon.js" />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" 
        />
      </body>
    </html>
  );
}
