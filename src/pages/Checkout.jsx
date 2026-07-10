import React, { useContext, useState } from 'react'
import SectionHeading from '../shared/SectionHeading'
import { FaArrowLeftLong } from "react-icons/fa6";
import Wrapper from '../shared/Wrapper';
import { NavLink } from 'react-router-dom';
import { SidbarContext } from '../context/SidbarContext';
import DeliveryAddress from '../features/checkout/component/DeliveryAddress';
import OrderSummary from '../features/checkout/component/OrderSummary';
import DeliveryOptions from '../features/checkout/component/DeliveryOptions';
import PaymentMethod from '../features/checkout/component/PaymentMethod'
import useOrders from '../features/orders/hook/useOrders';

function Checkout() {
    const { setActive } = useContext(SidbarContext)
    const { placedOrder } = useOrders()

    const [address, setAddress] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    })

    const [deliveryOption, setDeliveryOption] = useState("ASAP");

    const [paymentMethod, setPaymentMethod] = useState("COD");

    const handlePlaceOrder = () => {
        placedOrder({
            address,
            paymentMethod,
            deliveryOption,
        });
    };



    return (
        <Wrapper>
            <NavLink to="/cart" onClick={() => setActive("Cart")} className="flex mb-3 items-center gap-2">
                <FaArrowLeftLong />
                <SectionHeading title="Checkout" />
            </NavLink>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex flex-col gap-5'>
                    <DeliveryAddress address={address} setAddress={setAddress} />
                    <DeliveryOptions deliveryOption={deliveryOption} setDeliveryOption={setDeliveryOption} />
                    <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                </div>
                <div>
                    <OrderSummary handlePlaceOrder={handlePlaceOrder} setPaymentMethod={setPaymentMethod} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Checkout
