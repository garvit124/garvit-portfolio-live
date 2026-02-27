import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garvit Gupta - AI/ML Engineer & Data Analyst",
  description: "Portfolio of Garvit Gupta, specializing in Big Data Analytics, Cloud ETL, and AI-driven automation.",
  keywords: ["Data Analyst", "Data Engineer", "AI Engineer", "ML Engineer", "Garvit Gupta", "Portfolio", "Big Data", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
