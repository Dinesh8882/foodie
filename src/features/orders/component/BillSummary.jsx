import React from "react";
import { FiDownload } from "react-icons/fi";

const BillSummary = () => {
  return (
    <div className="px-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Bill Summary
      </h2>

      <div className="space-y-1">
        <div className="flex justify-between text-gray-500 text-sm">
          <span>Item Total</span>
          <span className="font-medium text-gray-700">₹657.00</span>
        </div>

        <div className="flex justify-between text-gray-500 text-sm">
          <span>Delivery Fee</span>
          <span className="font-medium text-gray-700">₹20.00</span>
        </div>

        <div className="flex justify-between text-gray-500 text-sm">
          <span>Platform Fee</span>
          <span className="font-medium text-gray-700">₹10.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-green-600 font-medium">Discount</span>
          <span className="text-green-600 font-semibold">-₹237.00</span>
        </div>
      </div>

      <hr className="my-2 border-gray-200" />

      <div className="flex justify-between items-center">
        <span className="text-md font-semibold text-gray-800">
          Total Amount
        </span>
        <span className="text-md font-bold text-gray-900">
          ₹450.00
        </span>
      </div>

      <button
        className="
          w-full mt-4
          flex items-center justify-center gap-2
          border border-orange-400
          text-orange-500
          py-2 rounded-lg
          font-medium
          hover:bg-orange-50
          transition
        "
      >
        <FiDownload size={18} />
        Download Invoice
      </button>
    </div>
  );
};

export default BillSummary;