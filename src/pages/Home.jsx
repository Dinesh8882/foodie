import React from 'react'
import Wrapper from '../shared/Wrapper'

import CategoryTabs from '../shared/CategoriesTabs'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'

import { dishes } from '../data/dishes'

function Home() {
    return (
        <Wrapper>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>
                    <SectionHeading title="Populer Dishes" />
                    <CategoryTabs />
                    <div className='grid grid-cols-3 mt-4 gap-x-8 gap-y-4'>
                        {
                            dishes.map((item) => {
                                return (
                                    <FoodCard item={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </ Wrapper >
    )
}

export default Home
