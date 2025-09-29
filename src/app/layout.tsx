import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
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
        className={`${montserrat.variable} font-sans antialiased`}
        style={{
          backgroundImage: "url('/images/bg-texture.png')",
        }}
      >
        {children}
      </body>
    </html>
  );
}
