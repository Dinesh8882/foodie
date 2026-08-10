import React from 'react'
import { motion } from 'framer-motion'

function CheckoutProduct({ item, quantity, deleteCartItem }) {

    
    return (
        <div className="flex flex-row gap-4">
            <div>
                <div className='relative flex items-center rounded-xl overflow-hidden'>
                    <img
                        src={item.image}
                        alt="Pizza"
                        className="w-14 h-14  object-cover"
                    />
                    <motion.div
                        onClick={() => deleteCartItem(item.id)}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xl cursor-pointer"
                    >
                        ✕
                    </motion.div>
                </div>
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-slate-800 text-sm">
                        {item.name}
                    </h3>
                    <span className="font-medium text-slate-700 text-sm">
                        ${(item.price).toFixed(0)}
                    </span>
                </div>

                <p className="text-sm text-gray-500 ">
                    Classic delight with 100% real mozzarella cheese.
                </p>

                <div className="flex justify-between items-center mt-1">
                    <span className="text-slate-700 font-bold">
                        Qty: {quantity}
                    </span>

                    <span className="font-semibold text-orange-500">
                        ${(item.price * quantity).toFixed(0)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
