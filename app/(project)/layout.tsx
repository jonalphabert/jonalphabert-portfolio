import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from "next/image";

import darkBackground from "@/assets/images/dark-background.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-0">
          <Image src={darkBackground} alt={"background"} fill quality="100" priority={true} className={"select-none object-cover"} />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
