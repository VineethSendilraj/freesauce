import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { FONT_PREFERENCE_KEY, FONT_CLASS_MAP } from "@/lib/font";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const FONT_CLASS_LIST = Object.values(FONT_CLASS_MAP);
const FONT_PREFERENCE_INLINE_SCRIPT = `
;(function () {
  try {
    var key = "${FONT_PREFERENCE_KEY}";
    if (typeof window === "undefined") {
      return;
    }
    var root = document.documentElement;
    if (!root) {
      return;
    }
    var classes = ${JSON.stringify(FONT_CLASS_LIST)};
    classes.forEach(function (className) {
      root.classList.remove(className);
    });
    var stored = window.localStorage.getItem(key);
    var classToAdd = stored === "arial" ? "font-arial" : "font-system";
    root.classList.add(classToAdd);
  } catch (error) {
    // Ignore storage errors.
  }
})();
`;

export const metadata: Metadata = {
  title: "Builder Sauce | FreeSauce",
  description: "Discover free tools, credits, and resources for builders creating amazing projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-system">
      <head>
        <script dangerouslySetInnerHTML={{ __html: FONT_PREFERENCE_INLINE_SCRIPT }} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
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
