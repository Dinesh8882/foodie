import { useContext } from "react";
import {
    FiSearch,
    FiBell,
    FiChevronDown,
    FiCalendar,
    FiShoppingCart,
} from "react-icons/fi";
import { SidbarContext } from "../context/SidbarContext";

function Navbar() {
    const { active: activePage } = useContext(SidbarContext)
    return (
        <header className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">

            {/* Left Section */}
            {activePage === "Orders" && (
                <div>
                    <h1 className="text-2xl font-bold">{activePage}</h1>
                    <p className="text-gray-500 text-sm">
                        Track and manage all your orders
                    </p>
                </div>
            )}

            {/* Center Section */}
            <div className="flex items-center gap-4">
                <div className="relative w-72">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                        type="text"
                        placeholder={`Search ${activePage.toLowerCase()}...`}
                        className={`w-full pl-11 pr-4 ${activePage === "Orders"?"py-2":"py-3"} border border-gray-200 rounded-xl`}
                    />
                </div>

                {activePage === "Orders" && (
                    <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl">
                        <FiCalendar />
                        <span className="text-sm">
                            May 1 - May 31, 2024
                        </span>
                    </div>
                )}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-5">

                    <div className="relative">
                        <button className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center">
                            <FiShoppingCart />
                        </button>

                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            4
                        </span>
                    </div>

                        <div className="relative">
                            <button className="w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center">
                                <FiBell />
                            </button>

                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                                3
                            </span>
                        </div>

                <div className="flex items-center gap-3">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="profile"
                        className="w-11 h-11 rounded-full"
                    />

                    <FiChevronDown />
                </div>
            </div>
        </header>
    );
}

export default Navbar;