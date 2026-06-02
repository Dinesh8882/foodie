import React from "react";
import {
  FiClock,
  FiCheckCircle,
  FiPackage,
  FiTruck,
  FiXCircle,
} from "react-icons/fi";

const orderStatuses = [
  {
    label: "All Orders",
    count: 24,
    active: true,
  },
  {
    label: "Pending",
    count: 5,
    icon: FiClock,
    color: "text-gray-500",
  },
  {
    label: "Confirmed",
    count: 6,
    icon: FiCheckCircle,
    color: "text-green-500",
  },
  {
    label: "Preparing",
    count: 4,
    icon: FiPackage,
    color: "text-blue-500",
  },
  {
    label: "On the Way",
    count: 5,
    icon: FiTruck,
    color: "text-purple-500",
  },
  {
    label: "Delivered",
    count: 4,
    icon: FiCheckCircle,
    color: "text-green-500",
  },
  {
    label: "Cancelled",
    count: 0,
    icon: FiXCircle,
    color: "text-red-500",
  },
];

export default function OrderTabs() {
  return (
    <div className="flex flex-wrap gap-3">
      {orderStatuses.map((status) => {
        const Icon = status.icon;

        return (
          <button
            key={status.label}
            className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 transition-all
              ${
                status.active
                  ? "border-orange-500 bg-orange-500 text-white shadow-sm"
                  : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
              }
            `}
          >
            {!status.active && Icon && (
              <Icon className={`text-md ${status.color}`} />
            )}

            <span className="text-sm font-medium">
              {status.label}
            </span>

            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold
                ${
                  status.active
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }
              `}
            >
              {status.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}