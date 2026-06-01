import React from 'react'
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const CartItem = () => {
  return (
    <div className="flex items-end justify-between  rounded-lg w-">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"
          alt="Pizza"
          className="w-19 h-19 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-semibold text-sm text-gray-800">
            Margherita Pizza
          </h3>
          <p className="text-gray-500 text-sm">$8.99</p>

          {/* Quantity Controls */}
          <div className="flex px-1 items-center mt-2 border border-gray-200 rounded-md w-fit">
            <button className="p-1 cursor-pointer text-gray-500 hover:bg-gray-100">
              <FiMinus size={14} />
            </button>

            <span className="p-1 text-sm font-medium">
              1
            </span>

            <button className="p-1 cursor-pointer text-gray-500 hover:bg-gray-100">
              <FiPlus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button className="text-red-500 mb-2 cursor-pointer hover:text-red-600">
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;