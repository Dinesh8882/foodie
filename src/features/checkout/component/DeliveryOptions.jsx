import React from "react";
import {
  FiTruck,
  FiCalendar,
  FiClock,
  FiChevronDown,
} from "react-icons/fi";

const DeliveryOptions = ({ setDeliveryOption, deliveryOption }) => {

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      {/* Header */}
      <div className="flex items-start gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
          <FiTruck className="text-green-600 text-md" />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            Delivery Options
          </h2>
          <p className="text-sm text-gray-500">
            Choose when you want your order
          </p>
        </div>
      </div>

      {/* Deliver ASAP */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="radio"
          name="delivery"
          checked={deliveryOption === "ASAP"}
          onChange={() => setDeliveryOption("ASAP")}
          className="mt-1 accent-orange-500"
        />

        <div>
          <h3 className="font-medium text-gray-800">
            Deliver ASAP
          </h3>
          <p className="text-sm text-gray-500">
            Estimated delivery in 30-40 mins
          </p>
        </div>
      </label>

      {/* Schedule Delivery */}
      <div className="mt-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="radio"
            name="delivery"
            checked={deliveryOption === "SCHEDULED"}
            onChange={() => setDeliveryOption("SCHEDULED")}
            className="mt-1 accent-orange-500"
          />

          <div className="flex-1">
            <h3 className="font-medium text-gray-800">
              Schedule Delivery
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              Choose a specific date and time
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Date Picker */}
              <div
                className={`flex items-center justify-between border rounded-lg px-3 py-2.5 ${deliveryOption === "SCHEDULED"
                  ? "bg-white"
                  : "bg-gray-50 opacity-60"
                  }`}
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <FiCalendar size={16} />
                  <span className="text-sm">
                    Select date
                  </span>
                </div>

                <FiChevronDown
                  size={16}
                  className="text-gray-400"
                />
              </div>

              {/* Time Picker */}
              <div
                className={`flex items-center justify-between border rounded-lg px-3 py-2.5 ${deliveryOption === "SCHEDULED"
                  ? "bg-white"
                  : "bg-gray-50 opacity-60"
                  }`}
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock size={16} />
                  <span className="text-sm">
                    Select time
                  </span>
                </div>

                <FiChevronDown
                  size={16}
                  className="text-gray-400"
                />
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default DeliveryOptions;