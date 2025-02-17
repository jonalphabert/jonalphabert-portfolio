import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Image from "next/image";

import darkBackground from "@/assets/images/dark-background.png";
import Link from "next/link";
import Navbar from "@/components/Navbar/NavbarProject";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portfolio Jonathan Alphabert",
    default: "Jonathan Alphabert Sutanto",
  },
  description: "Hi, I’m Jonathan Alphabert Sutanto, a passionate web developer specializing in responsive design and JavaScript. Explore my portfolio to see my latest projects and let’s build something amazing together!",
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
      <Image src={darkBackground} alt={"background"} fill quality="100" priority={true}
             className={"select-none object-cover"}/>
    </div>
    <div className="relative z-10">
      <div className={"overflow-hidden"}>
        <Navbar/>
      </div>
      <main className={"container mx-auto px-4 py-16 overflow-hidden max-w-[1080px]"}>
        <div className={"mb-4"}>
          <Link href="/" className={"text-lg font-medium"}>&#8592; Back to home</Link>
        </div>
        {children}
      </main>
    </div>
    </body>
    </html>
);
}
