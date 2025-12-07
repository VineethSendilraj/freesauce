import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Builder Sauce | FreeSauce",
  description: "Discover free tools, credits, and resources for builders creating amazing projects",
};

export const viewport = {
  themeColor: "#ff69b4", // Hot pink for Labubu theme
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased relative`}
      >
        {/* Floating Labubu Decorators */}
        <div className="fixed top-20 left-4 z-10 opacity-80 hidden md:block">
          <Image
            src="/images/labubu/labubu-1.png"
            alt="Labubu decoration"
            width={80}
            height={80}
            className="drop-shadow-lg"
          />
        </div>
        <div className="fixed top-40 right-6 z-10 opacity-80 hidden md:block">
          <Image
            src="/images/labubu/labubu-2.png"
            alt="Labubu decoration"
            width={60}
            height={60}
            className="drop-shadow-lg"
          />
        </div>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
