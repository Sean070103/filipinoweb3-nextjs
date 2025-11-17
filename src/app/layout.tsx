import React from "react";
import Script from "next/script";
import { MetadataUtils, Json_LD } from "@/utilities";
import { Montserrat, Jersey_10, Press_Start_2P, Orbitron } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import setting from "@/config/setting.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start-2p",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
});

export const metadata = MetadataUtils();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Pixel Theme Meta Tags */}
        <meta name="theme-color" content="#4a148c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(Json_LD()) }}
        />
        
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${jersey.variable} ${pressStart2P.variable} ${orbitron.variable} font-sans antialiased`}
      >
        
        {setting.enablePerformanceMonitor && <PerformanceMonitor />}
        {children}
        
        {/* External Scripts */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || setting.recapcha}`}
          strategy="afterInteractive"
        />
        <Script
          src="https://kit.fontawesome.com/f8565b8867.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
