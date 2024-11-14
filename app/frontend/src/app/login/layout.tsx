import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">My Application</h1>
          <nav>
            <Link href="/" className="text-white hover:text-gray-200 mx-2">Home</Link>
            
            <Link href="/signup" className="text-white hover:text-gray-200 mx-2">Sign Up</Link>
            
            <Link href="/shopping-list" className="text-white hover:text-gray-200 mx-2">Shopping List</Link>
            
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <Image
          src="/cartoon-grocery.png" // Ensure you have this image in your public folder
          alt="Cartoon Grocery"
          width={200}
          height={200}
          className="mb-4"
        />
        {children}
      </main>
      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
