import React from "react";
import {
    FiClock,
    FiCalendar,
    FiCreditCard,
    FiChevronDown,
} from "react-icons/fi";
import OrderCard from "./OrderCard";

function OrderHeader({ order, toggle, isOpen }) {
    return (
        <div className="w-full relative mt-4 bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between gap-4 text-sm">

                {/* Order ID + Status */}
                <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-gray-900">
                        Order #{order.id.slice(0, 8).padStart(8, "0")}
                    </h3>

                    <span className="flex items-center gap-1 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-500">
                        {order.status}
                        <FiClock />
                    </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FiCalendar />
                    <span>
                        {new Date(order.orderedAt).toLocaleString()}
                    </span>
                </div>

                {/* Payment */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FiCreditCard />
                    <span>Paid via {order.paymentMethod}</span>
                </div>

                {/* Item Count */}
                <span className="text-gray-700">
                    {order.items.length} items
                </span>

                {/* Total */}
                <span className="font-bold text-gray-900">
                    ${order.total}
                </span>

                {/* Expand Button */}
                <button onClick={toggle} className={`cursor-pointer ${isOpen && "rotate-180"} transition-all duration-500 text-gray-600 hover:text-gray-900`}>
                    <FiChevronDown size={18} />
                </button>

            </div>

            {
                isOpen && <OrderCard item={order.items} />
            }
        </div>
    );
}

export default OrderHeader;