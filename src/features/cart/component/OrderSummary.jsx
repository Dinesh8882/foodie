import React from "react";
import {
  FiLock,
  FiShield,
} from "react-icons/fi";
import { FaTruck } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="lg:max-w-sm rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
      {/* Heading */}
      <h2 className="text-xl font-bold text-slate-900">
        Order Summary
      </h2>

      {/* Summary */}
      <div className="mt-4 space-y-5">
        <div className="flex justify-between text-md text-slate-700">
          <span>Subtotal</span>
          <span>$28.95</span>
        </div>

        <div className="flex justify-between text-md text-slate-700">
          <span>Delivery Fee</span>
          <span>$2.00</span>
        </div>

        <div className="flex justify-between text-md text-slate-700">
          <span>Tax (5%)</span>
          <span>$1.45</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-gray-200" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <h3 className="text-md font-bold text-slate-900">
          Total
        </h3>

        <span className="text-md font-bold text-orange-500">
          $32.40
        </span>
      </div>

      {/* Free Delivery */}
      <div className="mt-4 flex gap-4 rounded-xl bg-green-50 p-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
          <FaTruck className="text-green-600" />
        </div>

        <p className="text-sm leading-4 text-green-700">
          Yay! You got free delivery on orders above $30
        </p>
      </div>

      {/* Checkout Button */}
      <NavLink to="/checkout" className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 py-2 text-md font-semibold text-white transition hover:bg-orange-600">
        <FiLock size={18} />
        Proceed to Checkout
      </NavLink>

      {/* Secure Checkout */}
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
        <FiShield />
        <span>Secure checkout</span>
      </div>
    </div>
  );
};

export default OrderSummary;