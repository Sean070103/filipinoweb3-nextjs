import type { Metadata } from "next";
import { Montserrat, Jersey_10, Press_Start_2P, Orbitron } from "next/font/google";
import "./globals.css";
import PerformanceMonitor from "@/components/PerformanceMonitor";

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

export const metadata: Metadata = {
  title: "Filipino Web3",
  description: "An organization with the aim of helping our fellow Filipinos hone their skills and maximize their potential to grow in the Web3 space.",
  icons: {
    icon: "/images/upper_icon-01.png",
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
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
        />
        <script src="https://www.google.com/recaptcha/api.js?render=6LcYuLkpAAAAAGWDdPvO0UwzXsEsICHqkniMD4-y"></script>
        <script src="https://kit.fontawesome.com/f8565b8867.js" crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${montserrat.variable} ${jersey.variable} ${pressStart2P.variable} ${orbitron.variable} font-sans antialiased ph-page-bg`}
      >
        {/* Subtle Filipino pattern overlay */}
        <div className="ph-page-pattern fixed inset-0 -z-10" />
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
