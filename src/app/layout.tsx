import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import ScrollAnimation from "../components/ScrollAnimation";
import dynamic from 'next/dynamic';

// Lazy load non-critical visual effects
const ParallaxScrollEffects = dynamic(() => import("../components/ParallaxScrollEffects"), {
  loading: () => null,
});
import StructuredData from "../components/StructuredData";
import WhatsAppWidget from "../components/WhatsAppWidget";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Reduced weights for performance
  display: 'swap', // Prevent layout shift
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vendmat.com'),
  title: "Vendmat | Hot Food Vending Machines - Fresh Meals 24/7",
  description: "Food Court in a Vending Machine! Hot food vending machines maintaining meals at 60°C. Partner with 4 restaurants per machine. Fresh meals replenished 4 times daily. Pre-order available 2 hours in advance.",
  keywords: [
    "hot food vending machine",
    "food court vending machine", 
    "fresh meals 24/7",
    "office food solutions",
    "restaurant partnerships",
    "pre-order food",
    "heated food dispenser",
    "corporate cafeteria alternative",
    "tech park food",
    "vendmat",
    "60 degree celsius food storage",
    "mobile app food ordering"
  ].join(", "),
  authors: [{ name: "Vendmat Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/vendmat_logo/11.png",
    shortcut: "/vendmat_logo/11.png",
    apple: "/vendmat_logo/11.png",
  },
  openGraph: {
    title: "Vendmat | Hot Food Vending Machines - Food Court in a Vending Machine",
    description: "Revolutionary hot food vending machines with multiple restaurant partnerships per machine.",
    type: "website",
    locale: "en_US",
    siteName: "Vendmat",
    url: "https://vendmat.com",
    images: [
      {
        url: "/vendmat_photos/DSC01982- With Boxes.png",
        width: 1200,
        height: 630,
        alt: "Vendmat Hot Food Vending Machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendmat | Hot Food Vending Machines",
    description: "Food Court in a Vending Machine! Fresh hot meals 24/7 with restaurant partnerships.",
    images: ["/vendmat_photos/DSC01982- With Boxes.png"],
  },
  // verification: {
  //   google: "google-site-verification-code-here", // Add actual verification code when available
  // },
  alternates: {
    canonical: "https://vendmat.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${inter.variable} antialiased bg-gray-900 font-['Inter']`}>
        <ParallaxScrollEffects />
        <Layout darkNav={true}>
          {children}
          <ScrollAnimation />
        </Layout>
        <WhatsAppWidget />
      </body>
    </html>
  );
}
