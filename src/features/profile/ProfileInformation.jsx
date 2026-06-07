import React, { useState } from "react";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiCalendar,
    FiEdit2,
    FiSave,
} from "react-icons/fi";

const ProfileInformation = () => {
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "John Doe",
        dob: "1995-03-15",
        email: "john.doe@email.com",
        gender: "Male",
        phone: "+1 9876543210",
        memberSince: "2024-01-12",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        if (editing) {
            // Save API call here
            console.log(formData);
        }

        setEditing(!editing);
    };

    return (
        <div className="bg-white p-6   rounded-2xl shadow-sm">
            {/* Header */}

            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                    <FiUser className="text-orange-500 mt-1" size={20} />

                    <div>
                        <h2 className="font-semibold text-lg">
                            Profile Information
                        </h2>

                        <p className="text-sm text-gray-500">
                            Update your personal information
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300-orange-400 text-orange-500 hover:bg-orange-50"
                >
                    {editing ? <FiSave /> : <FiEdit2 />}
                    {editing ? "Save" : "Edit"}
                </button>
            </div>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-3">

                <div>
                    <label className="text-sm font-medium">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 disabled:bg-gray-50"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Date of Birth
                    </label>

                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 disabled:bg-gray-50"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Email Address
                    </label>

                    <div className="relative mt-1">
                        <FiMail className="absolute left-3 top-4 text-gray-400" />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 disabled:bg-gray-50"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Gender
                    </label>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        disabled={!editing}
                        className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 disabled:bg-gray-50"
                    >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Phone Number
                    </label>

                    <div className="relative mt-1">
                        <FiPhone className="absolute left-3 top-4 text-gray-400" />

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={!editing}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 disabled:bg-gray-50"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Member Since
                    </label>

                    <div className="relative mt-1">
                        <FiCalendar className="absolute left-3 top-4 text-gray-400" />

                        <input
                            type="date"
                            name="memberSince"
                            value={formData.memberSince}
                            disabled
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 bg-gray-50"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileInformation;