import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import VisitCounter from "@/components/VisitCounter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AyurMetabolics.fit | Ayurveda, Metabolic Health & Visceral Fat Reduction",
  description: "Evidence-based articles on Ayurveda, metabolic health, and visceral fat reduction. Combining traditional wisdom with modern science.",
  keywords: ["Ayurveda", "metabolic health", "visceral fat", "herbal protocols", "BAMS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} AyurMetabolics.fit. All rights reserved.
                </p>
              </div>
              <VisitCounter />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
