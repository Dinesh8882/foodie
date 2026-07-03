import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'

import CategoryTabs from '../shared/CategoriesTabs'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'

import { dishes } from '../data/dishes'
import CheckOut from '../shared/CheckOut'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../features/cart/slicers/cartSlicer'

function Home() {

    const dispatch = useDispatch()
    const items = useSelector((state)=>state.cartItem)
    console.log(items);
    


    const addItem = (item) => {
        dispatch(addCart(item))
    }

    return (
        <Wrapper>
            <SectionHeading title="Populer Dishes" varient="home" />
            <CategoryTabs />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-x-3 gap-y-4'>
                {
                    dishes.map((item) => {
                        return (
                            <FoodCard addItem={addItem} key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </ Wrapper >
    )
}

export default Home
