import React from 'react'
import Wrapper from '../shared/Wrapper'
import OrderTabs from '../features/orders/component/OrderTabs'
import TableHeader from '../features/orders/component/TableHeader'
import TableWrapper from '../features/orders/component/TableWrapper'
import TableBody from '../features/orders/component/TableBody'

function Orders() {
  return (
    <Wrapper>
      <OrderTabs />

      <TableWrapper>
        <TableHeader />
        <TableBody />
      </TableWrapper>
    </Wrapper>
  )
}

export default Orders
