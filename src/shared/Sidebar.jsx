import React, { useState } from 'react'

import {
    FiHome,
    FiMenu,
    FiClipboard,
    FiHeart,
    FiUser,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";

const menuItems = [
    { name: "Home", icon: <FiHome /> },
    { name: "Menu", icon: <FiMenu /> },
    { name: "Orders", icon: <FiClipboard /> },
    { name: "Favorites", icon: <FiHeart /> },
    { name: "Profile", icon: <FiUser /> },
    { name: "Settings", icon: <FiSettings /> },
];


function Sidebar() {

    const [active, setActive] = useState("Home");

    return (
        <div className=" md:w-80 h-screen bg-[#081325] text-white flex flex-col justify-between p-5">

            {/* Logo */}
            <div>
                <h1 className="text-3xl font-bold text-orange-500">
                    Foodie
                </h1>
                <p className="text-gray-400">Dashboard</p>

                {/* Menu */}
                <div className="mt-10 space-y-3">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(item.name)}
                            className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2 rounded-xl transition
                                     ${item.name === active
                                    ? "bg-orange-500"
                                    : "hover:bg-white/10"
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className='md:block hidden'>{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            {/* Bottom */}
            <div>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-xl">
                    <FiLogOut />
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Sidebar
