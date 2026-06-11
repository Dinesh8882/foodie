import React, { useState, useRef, useEffect, useContext } from "react";
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

import profile from '../assets/profile.webp'
import useToggle from "./hooks/useToggle";
import { NavLink } from "react-router-dom";
import { SidbarContext } from "../context/SidbarContext";



const profileMenuItems = [
    {
        id: 1,
        label: "My Profile",
        icon: FiUser,
        path: "/profile",
    },
    {
        id: 2,
        label: "Order History",
        icon: FiClipboard,
        path: "/orders",
    },
    {
        id: 3,
        label: "Addresses",
        icon: FiMapPin,
        path: "/addresses",
        active: true,
    },
    {
        id: 4,
        label: "Payment Methods",
        icon: FiCreditCard,
        path: "/payment-methods",
    },
];


const ProfileDropdown = () => {
    const { toggle, isOpen } = useToggle(false)
    const {setActive} = useContext(SidbarContext)
    

    return (
        <div className="relative ">
            {/* Profile Trigger */}
            <button
                onClick={toggle}
                className="flex items-center gap-2 cursor-pointer"
            >
                <img
                    src={profile}
                    alt="profile"

                    className="w-10 h-10 rounded-full object-cover"
                />
                <FiChevronDown className={`text-gray-600 ${isOpen && "rotate-180"}`} />
            </button>

            {/* Dropdown */}
            {
                isOpen && (
                    <div

                        className="absolute mt-2 right-0 top-14 sm:w-80 w-69 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">
                        {/* Arrow */}
                        <div className=" w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                        {/* User Info */}
                        <div className="p-5" onClick={()=>setActive("Profile")}>
                            <NavLink to="/profile" className="flex items-center gap-4">
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
                            </NavLink>
                        </div>

                        <div className="border-t border-gray-100" />

                        {/* Main Menu */}
                        <div className="py-2">
                            {
                                profileMenuItems.map((item) => (
                                    <MenuItem icon={<item.icon />} text={item.label} path={item.path}/>

                                ))
                            }
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
                )
            }
        </div>
    );
};

const MenuItem = ({ icon: Icon, text ,path}) => (
    <NavLink to={path} className="w-full flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-gray-50 transition">
        <span className="text-lg">{Icon}</span>
        <span>{text}</span>
    </NavLink>
);

export default ProfileDropdown;