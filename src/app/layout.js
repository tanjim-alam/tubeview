import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy YouTube Views & Subscribers Instantly | Buy YouTube Views- TubeViews",
  description: "Buy YouTube views and subscribers to grow your channel's visibility and credibility. Boost engagement, attract a wider audience, and elevate your content's success with real, high-quality interactions!",
  keywords: "Buy YouTube Views, Buy YouTube Subscribers",
  other: {
    "google-site-verification": "8L6rNpN5l_HRBkQeyoCjI7a536HrGeOAadihAceTEnA",
  },
  alternates: {
    canonical: 'https://www.tubeviews.co/',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <TopBar />
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}


