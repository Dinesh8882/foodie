import React from "react";
import { FiPlus } from "react-icons/fi";

const DishCard = () => {
  return (
    <div className=" flex items-center justify-between mt-2">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Food Image */}
        <img
          src="https://images.unsplash.com/photo-1576107232684-1279f390859f?w=100&h=100&fit=crop"
          alt="French Fries"
          className="h-11 w-11 rounded-xl object-cover"
        />

        {/* Food Details */}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            French Fries
          </h3>
          <p className="mt-1 text-sm font-bold text-orange-500">
            $2.49
          </p>
        </div>
      </div>

      {/* Add Button */}
      <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition hover:bg-gray-100">
        <FiPlus className="text-gray-500 text-lg" />
      </button>
    </div>
  );
};

export default DishCard;