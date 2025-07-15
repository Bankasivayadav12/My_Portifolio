import { Outfit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/curosel";
const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "siva-Portfolio ",
  description: "My portfolio",
};

export default function RootLayout({ children }:{ children:React.ReactNode}) {
  return (
  
      <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
         
         
            <CursorTrail/>
            <Navbar/>
            {children}
            <Footer/>
        
        </body>
      </html>
      
  );
}
