import React from 'react'



function ProDrop() {
    return (
        <div className='w-full h-full absolute top-0 left-0 bg-black/50'>
            <div className="absolute mt-2 right-0 top-14 sm:w-80 w-69 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">

                {/* User Info */}
                <div className="p-5 flex justify-between" >
                    <NavLink onClick={() => setActive("Profile")} to="/profile" className="flex items-center gap-4">
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
                    <GiCrossedBones onClick={profileToggle} className="cursor-pointer" />

                </div>

                <div className="border-t border-gray-100" />

                {/* Main Menu */}
                <div className="py-2">
                    {
                        profileMenuItems.map((item) => (
                            <MenuItem icon={<item.icon />} text={item.label} path={item.path} />

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
        </div>
    )
}

export default ProDrop
