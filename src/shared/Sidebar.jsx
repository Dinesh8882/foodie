import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.webp'

import {
    FiHome,
    FiMenu,
    FiClipboard,
    FiHeart,
    FiUser,
    FiSettings,
    FiLogOut,
    FiX,
} from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { SidbarContext } from '../context/SidbarContext';

const menuItems = [
    { name: "Home", icon: <FiHome />, link: '/' },
    { name: "Menu", icon: <FiMenu />, link: '/menu' },
    { name: "My Orders", icon: <FiClipboard />, link: '/orders' },
    { name: "Favorites", icon: <FiHeart />, link: '/favorites' },
    { name: "Profile", icon: <FiUser />, link: '/profile' },
    { name: "Settings", icon: <FiSettings />, link: '/settings' },
];


function Sidebar({ isOpen, toggle }) {


    const { active, setActive } = useContext(SidbarContext)

    useEffect(() => {
        if (active !== "Cart") {
            toggle()
        }
    }, [active])

    return (
        <div
            className={`absolute top-0 z-50 md:static transition-all duration-500 ease-in-out ${isOpen ? "-left-full" : "left-0"} sm:w-74 w-full  h-screen bg-[#081325] text-white md:flex flex-col justify-between p-5`}>

            {/* Logo */}
            <div className='w-full'>
                {/* <img src={logo} alt="logo" className='w-15 h-15 sm:hidden' loading='lazy' /> */}
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className="text-3xl  font-bold text-orange-500">
                            Foodie
                        </h1>
                        <p className="text-gray-400">Dashboard</p>
                    </div>
                    <FiX size={24} onClick={toggle} className='md:hidden flex' />

                </div>

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
                            <span className=''>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* Bottom */}
            <div>
                <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-xl">
                    <FiLogOut />
                    <span className=' '>Logout</span>

                </button>
            </div>
        </div>
    );
}

export default Sidebar
