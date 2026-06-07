import React from "react";
import { FiHeart } from "react-icons/fi";

const EmptyFavoriteCard = () => {
  return (
    <div className="w-[240px] rounded-2xl bg-[#00ff1e2d] border border-[#E2F3E4] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold text-[#2F7A48]">
            Haven't ordered yet?
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#4F8A63]">
            Add your favorite items to cart
            
            and enjoy!
          </p>
        </div>

        {/* Heart Icon */}
        <div className="mt-1">
          <FiHeart
            size={26}
            className="text-[#A7D8B3] stroke-[1.8]"
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyFavoriteCard;