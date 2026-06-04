import React from 'react'
import Wrapper from '../shared/Wrapper'
import OrderTabs from '../features/orders/component/OrderTabs'
import OrderCard from '../features/orders/component/OrderCard'
import SectionHeading from '../shared/SectionHeading'

function Orders() {
  return (
    <Wrapper>
      <SectionHeading title="My Orders" varient="orders"/>
      <p className='text-gray-500 mb-4'>View and track all your orders in one place.</p>
      <OrderTabs />
      <OrderCard />
    </Wrapper>
  )
}

export default Orders
