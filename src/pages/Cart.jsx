import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'

import { FaShoppingCart } from "react-icons/fa";
import CartItem from '../features/cart/component/CartItem';
import OrderSummary from '../features/cart/component/OrderSummary';
import Features from '../features/cart/component/Features';
import { useSelector } from 'react-redux';
import { useCart } from '../features/cart/hook/useCart';


function Cart() {

  const { deleteCartItem, increaseQuan, decreaseQuan, products, cartItem, cartIsEmpty, total, subTotal, deliveryFee, tax } = useCart()


  return (
    <Wrapper>


      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 w-full'>
        <div className='lg:col-span-8'>
          <div className='flex gap-3 items-center '>
            <FaShoppingCart className='text-xl' />
            <SectionHeading title="My Cart" />
          </div>

          {
            cartItem.length !== 0 ? (
              cartItem?.map((item, id) => {

                const product = products.find(p => p.id === item.id)

                return (
                  <div key={id}>
                    <CartItem
                      deleteCartItem={deleteCartItem}
                      increaseQuan={increaseQuan}
                      decreaseQuan={decreaseQuan}
                      product={product}
                      quantity={item.quantity}
                    />
                  </div>
                )
              })
            ) : (
              <div className='text-xl mt-10 text-center text-gray-500'>
                <h3>Your cart is empty.</h3>
                <p>Start shopping and discover amazing products!</p>
              </div>
            )
          }
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2  lg:col-span-4 lg:flex w-full justify-between lg:flex-col gap-5 mt-3'>
          <OrderSummary
            cartIsEmpty={cartIsEmpty}
            total={total}
            deliveryFee={deliveryFee}
            tax={tax}
            subTotal={subTotal}
          />
          <Features />
        </div>
      </div>


    </Wrapper>
  )
}

export default Cart
