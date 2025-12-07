import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getSystemTheme() {
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }

                function getStoredTheme() {
                  try {
                    return localStorage.getItem('theme');
                  } catch (e) {
                    return null;
                  }
                }

                function setTheme(theme) {
                  const html = document.documentElement;
                  if (theme === 'dark') {
                    html.classList.add('dark');
                  } else {
                    html.classList.remove('dark');
                  }
                  try {
                    localStorage.setItem('theme', theme);
                  } catch (e) {}
                }

                const storedTheme = getStoredTheme();
                const systemTheme = getSystemTheme();
                const initialTheme = storedTheme || systemTheme;
                setTheme(initialTheme);

                window.addEventListener('theme-toggle', () => {
                  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                  setTheme(newTheme);
                });

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                  if (!getStoredTheme()) {
                    setTheme(e.matches ? 'dark' : 'light');
                  }
                });
              })();
            `,
          }}
        />
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
