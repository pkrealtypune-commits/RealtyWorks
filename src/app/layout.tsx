import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/ctaButton"; // Imported correctly

import "./globals.css";

// Body Font: Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Heading Font: Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Realty Works | Premium Industrial Real Estate",
  description: "High-end warehouse and industrial property solutions designed for scalability and performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jakarta.variable}`}
      data-theme="dark"
      suppressHydrationWarning 
    >
      <body className="font-sans antialiased bg-background-primary text-foreground-primary selection:bg-accent-gold selection:text-background-primary">
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main>
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating CTA - Renders on every page */}
        <FloatingContact />
      </body>
    </html>
  );
}