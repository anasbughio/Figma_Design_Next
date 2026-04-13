import "./globals.css";
import { Montserrat, Roboto, Caveat } from "next/font/google";

// Import your global layout components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure your fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  title: "We Know Training",
  description: "The platform that moves training forward.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} ${caveat.variable}`}>
        {/* The Navbar automatically appears at the top of EVERY page */}
        <Navbar />
        
        {/* 'children' represents whatever specific page the user is currently on */}
        <main>{children}</main>
        
        {/* The Footer automatically appears at the bottom of EVERY page */}
        <Footer />
      </body>
    </html>
  );
}