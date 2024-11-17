import React from "react";
import { ReceiptText } from "lucide-react"; // Optional: Add Lucid icon if desired

type ReceiptLayoutProps = {
  children: React.ReactNode;
};

const ReceiptLayout: React.FC<ReceiptLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F0F9F6] flex flex-col">
      {/* Header */}
      <header className="bg-[#A1EEBD] shadow-md py-4 flex justify-center items-center">
        <ReceiptText className="h-6 w-6 text-green-900 mr-2" />
        <h1 className="text-2xl font-bold text-green-900">Receipt Manager</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ReceiptLayout;
