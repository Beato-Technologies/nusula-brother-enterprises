import { Kumbh_Sans } from 'next/font/google';

import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"; // Placeholder
import Footer from "../components/Footer"; // Placeholder
import { AuthProvider } from "@/context/AuthContext"; // Import AuthProvider
import BackToTop from '@/components/BackToTop';

const kumbh = Kumbh_Sans({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nusula and Brother Enterprises | Fastbakes Food Ingredients",
  description: "Nusula and Brother Enterprises provides specialized food ingredients, manufacturing, and regional distribution across East Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbh.className}`}>
        <AuthProvider>
          <Header scroll={false} />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
        <BackToTop />
      </body>
    </html>
  );
}

