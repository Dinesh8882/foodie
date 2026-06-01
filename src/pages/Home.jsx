import React from 'react'
import Wrapper from '../shared/Wrapper'

import CategoryTabs from '../shared/CategoriesTabs'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'

import { dishes } from '../data/dishes'
import CartItem from '../shared/CartItem'
import CartHeader from '../shared/CartHeader'
import CheckOut from '../shared/CheckOut'

function Home() {
    return (
        <Wrapper>
            <div className='flex justify-between' >
                <div className=''>
                    <SectionHeading title="Populer Dishes" />
                    <CategoryTabs />
                    <div className='grid grid-cols-3 mt-4 gap-x-3 gap-y-4'>
                        {
                            dishes.map((item) => {
                                return (
                                    <FoodCard item={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='bg-white p-4 w-70 flex flex-col '>
                    <div>
                        <CartHeader />
                        <div className='flex flex-col gap-2 overflow-y-auto h-68'>
                            <CartItem />
                        </div>
                    </div>
                    <CheckOut />
                </div>
            </div>
        </ Wrapper >
    )
}

export default Home
