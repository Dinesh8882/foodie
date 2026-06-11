import React, { useContext } from 'react'
import SectionHeading from '../shared/SectionHeading'
import { FaArrowLeftLong } from "react-icons/fa6";
import Wrapper from '../shared/Wrapper';
import { NavLink } from 'react-router-dom';
import { SidbarContext } from '../context/SidbarContext';
import DeliveryAddress from '../features/checkout/component/DeliveryAddress';
import OrderSummary from '../features/checkout/component/OrderSummary';
import DeliveryOptions from '../features/checkout/component/DeliveryOptions';
import PaymentMethod from '../features/checkout/component/PaymentMethod'

function Checkout() {
    const { setActive } = useContext(SidbarContext)
    return (
        <Wrapper>
            <NavLink to="/cart" onClick={() => setActive("Cart")} className="flex mb-3 items-center gap-2">
                <FaArrowLeftLong />
                <SectionHeading title="Checkout" />
            </NavLink>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col gap-5'>
                    <DeliveryAddress />
                    <DeliveryOptions />
                    <PaymentMethod />
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout
