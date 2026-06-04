import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import img from '../../../assets/Burgger.webp'

const OrderItem = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Product Image */}
        <div className="w-14 h-14 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
          <img src={img} alt="Whopper" className="w-full h-full object-cover" />

          {/* <FiShoppingBag className="text-3xl text-gray-500" /> */}
        </div>

        {/* Product Info */}
        <div>
          <h3 className="font-bold text-md text-gray-800">Whopper</h3>
          <p className="text-sm text-gray-500">Qty: 2</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="text-right">
        <p className="text-gray-700 font-medium">₹249.00</p>
        <p className="text-gray-700 font-medium">₹498.00</p>
      </div>
    </div>
  );
};

export default OrderItem;