import React, { useState } from "react";
import {
  FiCreditCard,
  FiDollarSign,
  FiSmartphone,
} from "react-icons/fi";

const paymentMethods = [
  {
    id: "cod",
    title: "Cash on Delivery",
    description: "Pay with cash when your order is delivered",
    icon: FiDollarSign,
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    description: "Visa, Mastercard, Rupay, Amex",
    icon: FiCreditCard,
  },
  {
    id: "upi",
    title: "UPI",
    description: "Pay using any UPI app",
    icon: FiSmartphone,
  },
  {
    id: "paypal",
    title: "PayPal",
    description: "Pay using your PayPal account",
    icon: FiCreditCard,
  },
];

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("cod");

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
          <FiCreditCard className="text-violet-600 text-lg" />
        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            Payment Method
          </h2>
          <p className="text-sm text-gray-500">
            Select your preferred payment option
          </p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className="flex items-start gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="paymentMethod"
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className="mt-1 accent-orange-500"
            />

            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                {method.title}
              </h3>

              <p className="text-xs text-gray-500">
                {method.description}
              </p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;