import React from "react";
import { FiMapPin } from "react-icons/fi";
import AddressForm from "./AddressForm";

const DeliveryAddress = ({ address, setAddress }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm w-full">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
          <FiMapPin className="text-orange-500 text-md" />
        </div>

        <div>
          <h2 className="text-md font-semibold text-gray-800">
            Delivery Address
          </h2>
          <p className="text-[12px] text-gray-500">
            Enter the address where you want your order delivered
          </p>
        </div>
      </div>

      {/* Form */}
      <AddressForm setAddress={setAddress} address={address} />
    </div>
  );
};

export default DeliveryAddress;