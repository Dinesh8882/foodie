import React from "react";
import {
  FiShield,
  FiClock,
  FiHeadphones,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    title: "Secure Payment",
    description: "Your payment information is safe with us.",
    icon: FiShield,
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    id: 2,
    title: "Fast Delivery",
    description: "We deliver your food as fast as possible.",
    icon: FiClock,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "We are here to help you anytime.",
    icon: FiHeadphones,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden rounded-2xl border py-3 border-gray-100 bg-white shadow-sm">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className={`flex items-start  px-5 py-2 ${
              index !== features.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}
            >
              <Icon className={`text-2xl ${feature.color}`} />
            </div>

            <div>
              <h3 className="text-md font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}