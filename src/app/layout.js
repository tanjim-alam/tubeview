import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Head from "next/head";
import { FaTools } from "react-icons/fa";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy YouTube Views & Subscribers Instantly | Buy YouTube Views - GoFamy",
  description: "Buy YouTube views and subscribers to grow your channels visibility and credibility. Boost engagement, attract a wider audience, and elevate your content success with real, high-quality interactions!",
  keywords: "Buy YouTube Views, Buy YouTube Subscribers",
  other: {
    "google-site-verification": "f27n0TZdHOL0-KfoRglkrQNYgHNCMXxu8hFF7yYFDQg",
  },
  alternates: {
    canonical: 'https://www.gofamy.com/',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <TopBar />
          <Navbar />
          {/* ================ */}
          <div className=" fixed right-0 top-1/2 z-50">
            <Link
              href="/tools"
              className="bg-primary rounded-tl-md rounded-bl-md p-2 flex flex-col justify-center items-center text-white">
              <FaTools className="text-xl" />
              <span className="text-sm font-semibold">Tools</span>
            </Link>
          </div>
          {/* ================ */}
          <main className="">
            {children}
          </main>
          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}


