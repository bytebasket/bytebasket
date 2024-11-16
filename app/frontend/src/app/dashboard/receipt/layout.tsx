import React from "react";
import { ReceiptText } from "lucide-react"; // Optional: Add Lucid icon if desired

type ReceiptLayoutProps = {
  children: React.ReactNode;
};

const ReceiptLayout: React.FC<ReceiptLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 flex justify-center items-center">
        <ReceiptText className="h-6 w-6 text-bg-green-900 mr-2" />
        <h1 className="text-xl font-bold">Receipt Manager</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-sm text-gray-600">© 2024 ByteBasket. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReceiptLayout;
