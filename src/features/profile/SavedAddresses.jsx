import React from "react";
import {
  FiMapPin,
  FiHome,
  FiBriefcase,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiChevronRight,
} from "react-icons/fi";

const SavedAddresses = () => {
  const addresses = [
    {
      id: 1,
      type: "Home",
      icon: <FiHome size={24} />,
      badge: "Default",
      address: "22 Baker Street, Apartment 4B, New Delhi, INDIA",
      phone: "+91 98****210",
      bg: "bg-orange-50",
      iconColor: "text-orange-500",
    }
  ];

  return (
    <div className=" bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-3">
          <div className="text-orange-500 mt-1">
            <FiMapPin size={22} />
          </div>

          <div>
            <h2 className="text-md font-semibold text-gray-900">
              Saved Addresses
            </h2>
            <p className="text-sm text-gray-500">
              Manage your delivery addresses
            </p>
          </div>
        </div>
      </div>

      {/* Address List */}
      <div className="mb-2">
        {addresses.map((item, index) => (
          <div key={item.id}>
            <div className="flex items-center justify-between">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center ${item.bg} ${item.iconColor}`}
                >
                  {item.icon}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {item.type}
                    </h3>

                    {item.badge && (
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm">{item.address}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.phone}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
                  <FiEdit2 size={18} />
                </button>

                <button className="w-10 h-10 rounded-xl border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-50">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            {index !== addresses.length - 1 && (
              <div className="border-b border-gray-100 mt-5"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;