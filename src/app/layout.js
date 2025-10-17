import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sai Santanu Portfolio",
  description: "Personal portfolio of Sai Santanu — Developer & Innovator.",
  icons: [
    { rel: "icon", url: "/logo.png", sizes: "32x32" },
    { rel: "icon", url: "/logo.png", sizes: "16x16" },
    { rel: "apple-touch-icon", url: "/logo.png", sizes: "180x180" },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
