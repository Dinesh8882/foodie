import React from "react";



export default function TableHeader() {
    return (
        <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Order ID
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Date & Time
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Total
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase">
                    Action
                </th>
            </tr>
        </thead >      
  );
}