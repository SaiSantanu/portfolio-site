import { Inter, Space_Mono, Syne } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AmbientLight from "./components/AmbientLight";
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
  title: "Sai Santanu | Software Engineer & AI/ML Developer",
  description: "Personal portfolio of Sai Santanu, a Full Stack Developer & Software Engineer specializing in React, Spring Boot, Python, and AI Applications.",
  metadataBase: new URL("https://saisantanu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sai Santanu | Software Engineer & AI/ML Developer",
    description: "Explore the portfolio, projects, and client deployments of Sai Santanu, specializing in full stack web development and AI/ML.",
    url: "https://saisantanu.com",
    siteName: "Sai Santanu Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sai Santanu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Santanu | Software Engineer & AI/ML Developer",
    description: "Explore the portfolio of Sai Santanu, a Software Engineer specializing in React, Spring Boot, and AI.",
    creator: "@saisantanu",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "WebSite", "ProfilePage"],
    name: "Sai Santanu",
    jobTitle: "Software Engineer",
    description: "Full Stack Developer & AI/ML Engineer specializing in React, Spring Boot, and Python.",
    url: "https://saisantanu.com",
    sameAs: [
      "https://github.com/SaiSantanu",
      "https://linkedin.com/in/sai-santanu-sahoo"
    ]
  };
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceMono.variable} ${syne.variable} antialiased text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AmbientLight />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
