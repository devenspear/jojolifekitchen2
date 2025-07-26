import type { Metadata } from "next";
import { Playfair_Display, Inter, Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jo Joe's Life Kitchen - Cook with Joy",
  description: "Cook with joy and discover seasonal vibes from Nancy Jo Spear. Joyful, practical meals from Wilmington, NC.",
  keywords: "cooking, recipes, TikTok, Instagram, Nancy Jo Spear, Jo Joe's Life Kitchen, Trader Joe's",
  openGraph: {
    title: "Jo Joe's Life Kitchen",
    description: "Cook with joy and discover seasonal vibes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${lato.variable}`}>
      <body className="font-inter antialiased">
        <Navigation />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
