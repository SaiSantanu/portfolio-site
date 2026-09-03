import { Inter, Space_Mono, Syne } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      <body
        className={`${inter.variable} ${spaceMono.variable} ${syne.variable} antialiased bg-black text-white`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
