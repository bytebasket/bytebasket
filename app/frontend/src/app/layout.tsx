import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bytebasket",
  description: "Merging technology with groceries ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-400 text-blue-900 py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Image */}
          <div className="flex items-center">
            <Image
              src="/Logo.png" // Replace with the actual path to your logo in the public folder
              alt="ByteBasket Logo"
              width={200}  // Adjust width as needed
              height={50} // Adjust height as needed
              className="mr-2"
            />
        
          </div>
          {/* put the bugur menu here */}
        </div>
      </header>
      <main className="flex-grow container mx-auto p-2 flex flex-col items-center">
        <Image
          src="/cartoon-grocery.png" // Ensure you have this image in your public folder
          alt="Cartoon Grocery"
          width={150}
          height={150}
          className="mb-4"
        />
        {children}
      </main>
      <footer className="bg-blue-400 text-blue-900 py-2 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BYTEBASKET. All rights reserved.</p>
        </div>
      </footer>
    </div>
      </body>
    </html>
    
  );
}
interface LayoutProps {
  children: ReactNode;
}