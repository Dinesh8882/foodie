import React, { useState, useRef, useEffect } from "react";
import {
  FiUser,
  FiClipboard,
  FiMapPin,
  FiCreditCard,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";

import  profile from '../assets/profile.webp'

const ProfileDropdown = () => {
  

  return (
    <div className="relative ">
      {/* Profile Trigger */}
      <button
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={profile}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <FiChevronDown className="text-gray-600" />
      </button>

      {/* Dropdown */}
        <div className="absolute mt-2 right-0 top-14 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {/* Arrow */}
          <div className="absolute -top-2 right-10 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

          {/* User Info */}
          <div className="p-5">
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt="user"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-gray-900">
                  Dinesh
                </h3>
                <p className="text-sm text-gray-500">
                  Dinesh@email.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100" />

          {/* Main Menu */}
          <div className="py-2">
            <MenuItem icon={<FiUser />} text="My Profile" />
            <MenuItem icon={<FiClipboard />} text="Order History" />
            <MenuItem icon={<FiMapPin />} text="Addresses" />
            <MenuItem
              icon={<FiCreditCard />}
              text="Payment Methods"
            />
          </div>

          <div className="border-t border-gray-100" />

          {/* Settings */}
          <div className="py-2">
            <MenuItem icon={<FiSettings />} text="Settings" />
            <MenuItem icon={<FiHelpCircle />} text="Help & Support" />
          </div>

          <div className="border-t border-gray-100" />

          {/* Logout */}
          <button className="w-full flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-50 transition">
            <FiLogOut size={18} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <button className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
    <span className="text-lg">{icon}</span>
    <span>{text}</span>
  </button>
);

export default ProfileDropdown;