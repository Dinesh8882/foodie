import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'

import { FaShoppingCart } from "react-icons/fa";
import CartItem from '../features/cart/component/CartItem';
import OrderSummary from '../features/cart/component/OrderSummary';
import Features from '../features/cart/component/Features';
import { useSelector } from 'react-redux';
import { useCart } from '../hook/useCart';


function Cart() {
  const items = useSelector((state) => state.cartItem)
  const { deleteCartItem, increaseQuan, decreaseQuan } = useCart()





  return (
    <Wrapper>


      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full'>
        <div className='lg:col-span-8'>
          <div className='flex gap-3 items-center '>
            <FaShoppingCart className='text-xl' />
            <SectionHeading title="My Cart" />
          </div>

          {
            items.length !== 0 ? (
              items?.map((item, id) => (
                <div key={id}>
                  <CartItem
                    deleteCartItem={deleteCartItem}
                    increaseQuan={increaseQuan}
                    decreaseQuan={decreaseQuan}
                    item={item} />
                </div>
              ))
            ) : (
              <div className='text-xl mt-10 text-center text-gray-500'>
                <h3>Your cart is empty.</h3>
                <p>Start shopping and discover amazing products!</p>
              </div>
            )
          }
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
