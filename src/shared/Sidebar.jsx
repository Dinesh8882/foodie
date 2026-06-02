import React, { useContext, useState } from 'react'

import {
    FiHome,
    FiMenu,
    FiClipboard,
    FiHeart,
    FiUser,
    FiSettings,
    FiLogOut,
} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { SidbarContext } from '../context/SidbarContext';

const menuItems = [
    { name: "Home", icon: <FiHome />, link: '/' },
    { name: "Menu", icon: <FiMenu />, link: '/menu' },
    { name: "Orders", icon: <FiClipboard />, link: '/orders' },
    { name: "Favorites", icon: <FiHeart />, link: '/favorites' },
    { name: "Profile", icon: <FiUser />, link: '/profile' },
    { name: "Settings", icon: <FiSettings />, link: '/settings' },
];


function Sidebar() {


    const { active, setActive } = useContext(SidbarContext)

    return (
        <div className=" md:w-64 h-screen bg-[#081325] text-white flex flex-col justify-between p-5">

            {/* Logo */}
            <div>
                <h1 className="text-3xl font-bold text-orange-500">
                    Foodie
                </h1>
                <p className="text-gray-400">Dashboard</p>

                {/* Menu */}
                <div className="mt-10 space-y-3">
                    {menuItems.map((item, index) => (
                        <NavLink
                            to={item.link}
                            key={index}
                            onClick={() => setActive(item.name)}
                            className={` cursor-pointer flex items-center gap-3 px-3 py-2 rounded-xl transition
                                     ${item.name === active
                                    ? "bg-orange-500"
                                    : "hover:bg-white/10"
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className='md:block hidden'>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Bottom */}
            <div>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-xl">
                    <FiLogOut />
                    <span className='md:block hidden'>Logout</span>

                </button>
            </div>
        </div>
    );
}

export default Sidebar
