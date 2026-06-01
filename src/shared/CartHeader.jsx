import React from 'react'

const CartHeader = ({ count = 4, onClear }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
                Your Cart ({count})
            </h2>

            <button
                onClick={onClear}
                className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
            >
                Clear Cart
            </button>
        </div>
    );
};

export default CartHeader;