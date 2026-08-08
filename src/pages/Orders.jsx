import React from 'react'
import Wrapper from '../shared/Wrapper'
import OrderTabs from '../features/orders/component/OrderTabs'
import OrderCard from '../features/orders/component/OrderCard'
import SectionHeading from '../shared/SectionHeading'
import useToggle from '../shared/hooks/useToggle'
import useOrders from '../features/orders/hook/useOrders'

import { HiOutlineShoppingBag } from "react-icons/hi2";
import EmptyOrders from '../features/orders/component/EmptyOrders'
import OrderHeader from '../features/orders/component/OrderHeader'


function Orders() {
  const { toggle, isOpen } = useToggle(false)
  const { orders } = useOrders()
  return (
    <Wrapper>
      <div className=''>
        <SectionHeading title="My Orders" varient="orders" />
        <p className='text-gray-500 mb-4'>View and track all your orders in one place.</p>
        <OrderTabs />
        {
          orders.length !== 0 ? (
            orders.map((item) => {

              console.log(item);
              return (
                <OrderHeader order={item} toggle={toggle} isOpen={isOpen} />
              )
            })
          ) : (
            <EmptyOrders />
          )
        }
      </div>
    </Wrapper>
  )
}

export default Orders
