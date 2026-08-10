import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sai Santanu - Software Engineer & Data Analyst",
  description: "Personal portfolio of Sai Santanu — Software Engineer & Data Analyst.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
