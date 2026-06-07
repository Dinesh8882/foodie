import React from "react";
import { FiHeart } from "react-icons/fi";

const FavoriteCard = () => {
  return (
    <div className="w-[240px] rounded-2xl bg-[#ff000036] p-5 shadow-sm border border-[#F5E6D8]">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
          <FiHeart className="text-2xl text-red-500" />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Your Favorites
          </h3>

          <p className="mt-1 text-3xl font-bold text-orange-500">8</p>

          <p className="mt-1 text-sm text-gray-500">
            Items saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;