import React from 'react'
import Wrapper from '../shared/Wrapper'
import OrderTabs from '../features/orders/component/OrderTabs'
import OrderCard from '../features/orders/component/OrderCard'
import SectionHeading from '../shared/SectionHeading'
import OrderDetails from '../features/orders/component/OrderDetails'
import useToggle from '../features/orders/hook/useToggle'

function Orders() {
  const { toggle, isOpen } = useToggle(false)
  return (
    <Wrapper>
      <div className=''>
        <OrderDetails toggle={toggle} isOpen={isOpen} />
        <SectionHeading title="My Orders" varient="orders" />
        <p className='text-gray-500 mb-4'>View and track all your orders in one place.</p>
        <OrderTabs />
        <OrderCard toggle={toggle} isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

export default Orders
