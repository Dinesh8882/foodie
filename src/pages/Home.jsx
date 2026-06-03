import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'

import CategoryTabs from '../shared/CategoriesTabs'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'

import { dishes } from '../data/dishes'
import CheckOut from '../shared/CheckOut'

function Home() {
    return (
        <Wrapper>
            <SectionHeading title="Populer Dishes" />
            <CategoryTabs />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-x-3 gap-y-4'>
                {
                    dishes.map((item) => {
                        return (
                            <FoodCard key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </ Wrapper >
    )
}

export default Home
