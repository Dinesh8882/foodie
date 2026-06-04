import React from 'react'
import OrderDetailsHeader from './OrderDetailsHeader'
import OrderInfo from './OrderInfo'
import OrderItem from './OrderItem'
import BillSummary from './BillSummary'
import { motion } from 'framer-motion'

function OrderDetails({ toggle, isOpen }) {

    return (
        <motion.div
            initial={{
                x: 0
            }}
            animate={{
                x: isOpen? "100%":"0"
            }}
            className='absolute overflow-y-auto top-0 right-0 h-screen bg-white w-sm z-50 text-black'>
            <OrderDetailsHeader toggle={toggle} />
            <OrderInfo />
            <div className="border-t border-gray-200 my-1"></div>
            <OrderItem />
            <BillSummary />
        </motion.div>
    )
}

export default OrderDetails
