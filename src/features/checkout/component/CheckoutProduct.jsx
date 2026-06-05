import React from 'react'

function CheckoutProduct() {
    return (
        <div className="flex gap-4">
            <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"
                alt="Pizza"
                className="w-20 h-20 rounded-xl object-cover"
            />

            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-slate-800">
                        Margherita Pizza
                    </h3>
                    <span className="font-medium text-slate-700">
                        $8.99
                    </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                    Classic delight with 100% real mozzarella cheese.
                </p>

                <div className="flex justify-between items-center mt-3">
                    <span className="text-slate-700">
                        Qty: 2
                    </span>

                    <span className="font-semibold text-gray-600">
                        $17.98
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
