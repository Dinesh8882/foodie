import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'

import { FaShoppingCart } from "react-icons/fa";
import CartItem from '../features/cart/component/CartItem';
import OrderSummary from '../features/cart/component/OrderSummary';
import Features from '../features/cart/component/Features';


function Cart() {
  return (
    <Wrapper>


      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full'>
        <div className='lg:col-span-8'>
          <div className='flex gap-3 items-center '>
            <FaShoppingCart className='text-xl' />
            <SectionHeading title="My Cart" />
          </div>

          <CartItem />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2  lg:col-span-4 lg:flex w-full justify-between lg:flex-col gap-5 mt-3'>
          <OrderSummary />
          <Features />
        </div>
      </div>


    </Wrapper>
  )
}

export default Cart
