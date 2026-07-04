import React, { memo } from "react";
import { FiTrash2 } from "react-icons/fi";
import img from '../../../assets/Burgger.webp'

function CartItem({item,deleteCartItem}) {
    return (
        <div className="bg-white rounded-xl p-4 border border-gray-100 mt-3">
            <div className="flex flex-col sm:flex-row items-center justify-between ">
                {/* Left */}
                <div className="flex w-full sm:w-auto items-center gap-4">
                    <img
                        src={item.image}
                        alt={item.category}
                        className="w-20 h-20 rounded-lg object-cover"
                        loading="lazy"
                    />

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            {item.name}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500 max-w-[220px] leading-6">
                            {item.description}
                        </p>
                    </div>
                </div>

                <div className="flex w-full sm:w-auto mt-4 sm:mt-0 items-end gap-10">
                    {/* Price */}
                    <div>
                        <span className="text-md font-bold text-orange-500">
                            ${item.price}
                        </span>

                        {/* Quantity */}
                        <div className="flex items-center mt-2 border border-gray-200 rounded-md overflow-hidden">
                            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                                −
                            </button>

                            <span className="w-8 h-8 border-x border-gray-200 flex items-center justify-center font-semibold text-gray-800">
                                2
                            </span>

                            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                                +
                            </button>
                        </div>
                    </div>

                    {/* Remove */}
                    <button onClick={()=>deleteCartItem(item.id)} className="flex cursor-pointer items-center gap-2 text-red-500 text-sm font-medium hover:text-red-600">
                        <FiTrash2 size={16} />
                        Remove
                    </button>
                </div>
            </div>

            <div className="mt-4 border-t border-gray-100"></div>
        </div>
    );
}

export default memo(CartItem)