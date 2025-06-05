import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: {
    default: "Omar Eldash | Property Consultant in Dubai UAE",
    template: "%s | Omar Eldash - Dubai Real Estate Expert"
  },
  description: "Omar Eldash - Professional real estate consultant in Dubai specializing in luxury properties, investment opportunities, and market analysis. Get expert advice on buying, selling, and investing in Dubai's dynamic property market.",
  keywords: [
    "Dubai real estate",
    "Property consultant Dubai",
    "Real estate expert UAE",
    "Luxury properties Dubai",
    "Investment properties UAE",
    "Omar Eldash properties"
  ],
  authors: [{ name: "Omar Eldash", url: "https://yourawesomedomain.com" }],
  openGraph: {
    title: "Omar Eldash | Dubai's Trusted Property Consultant",
    description: "Expert real estate consultation services in Dubai for investors, buyers and sellers of premium properties",
    url: "https://yourawesomedomain.com",
    siteName: "Omar Eldash Properties",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omar Eldash - Dubai Property Expert"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Eldash | Dubai's Trusted Property Consultant",
    description: "Expert real estate consultation services in Dubai for investors, buyers and sellers of premium properties",
    images: ["/images/og-image.jpg"],
    creator: "@OmarEldash"
  },
  metadataBase: new URL("https://yourawesomedomain.com"),
  alternates: {
    canonical: "/",
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
    }
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
