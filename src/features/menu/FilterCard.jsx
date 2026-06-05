import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FilterCard = () => {
  const [price, setPrice] = useState(50);

  return (
    <div className="w-100 bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Filters
      </h3>

      {/* Price Range */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-4">
          Price Range
        </p>

        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-orange-500 cursor-pointer"
        />

        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>$0</span>
          <span>$50+</span>
        </div>
      </div>

      {/* Sort By */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Sort By
        </p>

        <div className="relative">
          <select className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Rating</option>
          </select>

          <FiChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;