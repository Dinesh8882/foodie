import React from 'react'
import { FaRegHeart } from "react-icons/fa";

export default function FoodCard({item}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={item.image}
          alt="Margherita Pizza"
          className="w-full h-30 object-cover"
        />

        <button className="absolute top-3 right-3">
          <FaRegHeart className="text-white text-xl" />
        </button>
      </div>

      <div className="px-4 py-2">
        <h2 className="text-md font-semibold">
          {item.name}
        </h2>

        <p className="text-gray-500 text-[14px] mt-1">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-orange-500">
            ${item.price}
          </span>

          <button className="bg-orange-500 text-white px-2 py-1.5 text-sm rounded-lg hover:bg-orange-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}