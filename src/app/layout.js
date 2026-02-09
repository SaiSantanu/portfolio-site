import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sai Santanu Portfolio",
  description: "Personal portfolio of Sai Santanu — Developer & Innovator.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-900 text-gray-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
