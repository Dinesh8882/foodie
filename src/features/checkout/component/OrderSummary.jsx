import React from "react";
import {
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiLock,
} from "react-icons/fi";
import CheckoutProduct from "./CheckoutProduct";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FiShoppingBag className="text-orange-500 text-xl" />
        <h2 className="text-2xl font-bold text-slate-800">
          Order Summary
        </h2>
      </div>

      {/* Product */}
      <CheckoutProduct />

      {/* Divider */}
      <div className="border-t border-gray-200 my-5" />

      {/* Price Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$28.95</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span>$2.00</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Tax (5%)</span>
          <span>$1.45</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-5" />

      {/* Total */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-xl font-bold text-slate-800">
          Total
        </span>

        <span className="text-xl font-bold text-orange-500">
          $32.40
        </span>
      </div>

      {/* Free Delivery */}
      <div className="bg-green-50 rounded-xl p-4 flex gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <FiTruck className="text-green-600" />
        </div>

        <p className="text-sm text-green-700">
          Yay! You got free delivery on orders above $30
        </p>
      </div>

      {/* Secure Checkout */}
      <div className="flex gap-3 mb-8">
        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
          <FiShield className="text-green-600" />
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">
            Secure Checkout
          </h4>
          <p className="text-sm text-gray-500">
            Your payment information is safe and encrypted
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
        <FiLock />
        Place Order
      </button>

      {/* Footer */}
      <p className="text-center text-xs text-gray-500 mt-5 leading-relaxed">
        By placing this order, you agree to our{" "}
        <span className="text-orange-500 cursor-pointer">
          Terms & Conditions
        </span>{" "}
        and{" "}
        <span className="text-orange-500 cursor-pointer">
          Privacy Policy
        </span>
      </p>
    </div>
  );
};

export default OrderSummary;