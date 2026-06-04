import React, { useContext } from 'react'
import SectionHeading from '../shared/SectionHeading'
import { FaArrowLeftLong } from "react-icons/fa6";
import Wrapper from '../shared/Wrapper';
import { NavLink } from 'react-router-dom';
import { SidbarContext } from '../context/SidbarContext';


function Checkout() {
    const {setActive} = useContext(SidbarContext)
    return (
        <Wrapper>
            <NavLink to="/cart" onClick={()=>setActive("Cart")} className="flex items-center gap-2">
                <FaArrowLeftLong />
                <SectionHeading title="Checkout" varient="checkout"/>
            </NavLink>
        </Wrapper>
    )
}

export default Checkout
