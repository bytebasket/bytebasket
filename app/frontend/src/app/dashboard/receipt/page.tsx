"use client";

import React from "react";
import ReceiptLayout from "@/app/dashboard/receipt/layout"; // Adjust the path if necessary

const ReceiptPage: React.FC = () => {
  return (
    
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Upload Your Receipts</h2>
        <p className="mb-4 text-gray-600">Save your receipts for future reference by uploading them here.</p>
        
        <div className="flex flex-col items-start gap-4">
          <label className="block">
            <span className="text-gray-700">Select a receipt image:</span>
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-green-900 hover:file:bg-blue-100"
            />
          </label>

          <button
            type="button"
            className="px-4 py-2 bg-green-900 text-white rounded hover:bg-green-900"
          >
            Upload Receipt
          </button>
        </div>
      </div>
    
  );
};

export default ReceiptPage;
