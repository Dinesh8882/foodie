import React from 'react'

function AddressForm({ address, setAddress }) {
    return (
        <form className="space-y-3">
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Full Name
                    </label>
                    <input
                        value={address.name}
                        onChange={(e) => setAddress({
                            ...address,
                            name: e.target.value
                        })}
                        name='name'
                        type="text"
                        placeholder="Dinesh"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Phone Number
                    </label>
                    <input
                        value={address.phone}
                        onChange={(e) => setAddress({
                            ...address,
                            phone: e.target.value
                        })}
                        name='phone'
                        type="text"
                        placeholder="+91 98****210"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
            </div>

            {/* Address */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Address
                </label>
                <input
                    name='address'
                    value={address.address}
                    onChange={(e) => setAddress({
                        ...address,
                        address: e.target.value
                    })}
                    type="text"
                    placeholder="22 Baker Street, Apartment 4B"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>

            {/* City State Zip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        City
                    </label>
                    <input
                        name='city'
                        value={address.city}
                        onChange={(e) => setAddress({
                            ...address,
                            city: e.target.value
                        })}
                        type="text"
                        placeholder="New Delhi"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        State
                    </label>
                    <input
                        name='state'
                        value={address.state}
                        onChange={(e) => setAddress({
                            ...address,
                            state: e.target.value
                        })}
                        type="text"
                        placeholder="IN"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        ZIP Code
                    </label>
                    <input
                        name='zip'
                        value={address.zip}
                        onChange={(e) => setAddress({
                            ...address,
                            zip: e.target.value
                        })}
                        type="text"
                        placeholder="10001"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 pt-1">
                <input
                    id="saveAddress"
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <label
                    htmlFor="saveAddress"
                    className="text-sm text-gray-600 cursor-pointer"
                >
                    Save this address for future orders
                </label>
            </div>
        </form>
    )
}

export default AddressForm
