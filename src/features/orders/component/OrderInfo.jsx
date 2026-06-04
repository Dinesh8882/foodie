import React from 'react'
import { FiMapPin } from "react-icons/fi";

function OrderInfo() {
  return (
    <div className=" py-5 bg-white">
      {/* Order Header */}
      <div className="flex items-start justify-between">
        <div className='px-6'>
          <h3 className="text-md font-semibold text-gray-900">
            Order #ORD12345
          </h3>

          <div className="flex text-sm items-center gap-3 mt-2 text-gray-500">
            <span>May 18, 2024</span>
            <span>•</span>
            <span>07:45 PM</span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Paid via UPI
          </p>
        </div>

        <span className="px-3 py-1 rounded-md bg-green-100 text-green-600 text-sm font-medium">
          Delivered
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Address Section */}
      <div className='px-6'>
        <h4 className="text-md font-semibold text-gray-900 mb-4">
          Delivery Address
        </h4>

        <div className="flex gap-3">
          <FiMapPin
            size={18}
            className="text-gray-500 mt-1 flex-shrink-0"
          />

          <div className="text-gray-600 text-sm ">
            <p className="font-medium text-gray-800">
              John Doe
            </p>

            <p>
              123, Green Street, Near Park,
            </p>

            <p>
              Bangalore, Karnataka - 560001
            </p>

            <p>
              +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;