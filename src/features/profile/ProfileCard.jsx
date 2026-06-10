import React from "react";
import {
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiLock,
  FiChevronRight,
  FiShield,
  FiCamera,
} from "react-icons/fi";

import profile from '../../assets/profile.webp'

const ProfileCard = () => {
  const menuItems = [
    {
      icon: <FiUser />,
      title: "Profile Information",
      active: true,
    },
    {
      icon: <FiMapPin />,
      title: "Addresses",
    },
    {
      icon: <FiCreditCard />,
      title: "Payment Methods",
    },
    {
      icon: <FiLock />,
      title: "Change Password",
    },
  ];

  return (
    <div className=" bg-gray-100 flex overflow-hidden rounded-2xl justify-center items-center ">
      <div className=" bg-white w-full  shadow-md p-5">

        {/* Profile Image */}

        <div className="flex flex-col items-center">

          <div className="relative">
            <img
              src={profile}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
              loading="lazy"
            />

            <button className="absolute bottom-0 right-0 bg-orange-500 p-2 rounded-full text-white shadow-lg">
              <FiCamera size={14} />
            </button>
          </div>

          <h2 className="text-2xl font-bold mt-4">
            Dinesh
          </h2>

          <p className="text-gray-400 text-sm">
            Tusharmahor9971@gmail.com
          </p>
        </div>

        {/* Menu */}

        <div className="mt-8 space-y-2">

          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition duration-300
              
              ${
                item.active
                  ? "bg-orange-50 text-orange-500"
                  : "hover:bg-gray-50 text-gray-600"
              }
              
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>

                <span className="font-medium text-sm">
                  {item.title}
                </span>
              </div>

              <FiChevronRight />
            </div>
          ))}
        </div>

        {/* Verification Card */}

        <div className="mt-8 bg-green-50 rounded-xl p-4 flex gap-3 items-start">

          <div className="bg-green-100 p-2 rounded-full text-green-600">
            <FiShield size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-green-800 text-sm">
              Account Verified
            </h3>

            <p className="text-xs text-green-600 mt-1">
              Your account is secure and verified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;