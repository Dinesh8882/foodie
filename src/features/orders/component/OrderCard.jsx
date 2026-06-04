import React from 'react'
import {
  FiCalendar,
  FiRefreshCw,
  FiCheckCircle,
} from "react-icons/fi";

import img from "../../../assets/Burgger.webp"

function OrderCard({ toggle, isOpen }) {
  return (
    <div className="bg-white border mt-4 border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src={img}
          loading="lazy"
          alt="Burger"
          className="w-24 h-24 rounded-lg object-cover"
        />

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Order #ORD12345
          </h3>

          <p className="text-gray-600 mt-1 font-medium">
            Burger King
          </p>

          <p className="text-gray-400 text-sm mt-1">
            2 × Whopper • 1 × French Fries • 1 × Coke
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-start gap-3">
        <span className="flex items-center gap-1 bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-md">
          Delivered
          <FiCheckCircle size={14} />
        </span>

        <h4 className="text-xl font-bold text-gray-900">
          ₹450.00
        </h4>

        <p className="text-sm text-gray-500">
          Paid via UPI
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-3">
        <button onClick={toggle} className="w-40 cursor-pointer py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition">
          View Details
        </button>

        <button className="w-40 py-2 border border-orange-500 text-orange-500 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-orange-50 transition">
          <FiRefreshCw size={16} />
          Reorder
        </button>
      </div>
    </div>
  );
}

export default OrderCard;