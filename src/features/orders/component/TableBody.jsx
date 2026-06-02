import React from 'react'
import { FiClock, FiEye, FiChevronDown } from "react-icons/fi";


const orders = [
    {
        id: "#ORD-2415",
        itemsCount: 2,
        customer: "John Doe",
        email: "john@example.com",
        phone: "+1 234 567 8901",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        items: [
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100",
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100",
        ],
        extraItems: 1,
        status: "Pending",
        date: "May 31, 2024",
        time: "10:30 AM",
        total: "$23.48",
    },
];
function TableBody() {
    return (
        <tbody>
            {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                    {/* Order ID */}
                    <td className="px-6 py-5">
                        <h3 className="font-bold text-gray-900">
                            {order.id}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            {order.itemsCount} items
                        </p>
                    </td>

                    {/* Customer */}
                    <td className="px-6 py-5">
                        <div>
                            <h4 className="font-medium text-gray-900">
                                {order.customer}
                            </h4>



                            <p className="text-sm text-gray-500">
                                {order.phone}
                            </p>
                        </div>
                    </td>


                    {/* Status */}
                    <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2 text-sm font-medium text-orange-500">
                            <FiClock size={14} />
                            Pending
                        </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-5">
                        <h4 className="font-medium text-gray-700">
                            {order.date}
                        </h4>
                    </td>

                    {/* Total */}
                    <td className="px-6 py-5">
                        <h4 className="text-xl font-bold text-gray-900">
                            {order.total}
                        </h4>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                                <FiEye />
                                View Details
                            </button>

                            <button className="rounded-lg border border-gray-200 p-2 text-gray-500 hover:bg-gray-50">
                                <FiChevronDown />
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
