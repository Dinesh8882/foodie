import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'
import CategoryTabs from '../shared/CategoriesTabs'
import FoodCard from '../shared/FoodCard'
import { dishes } from '../data/dishes'
import FilterCard from '../features/menu/FilterCard'

function Menu() {
  return (
    <Wrapper>
      <SectionHeading title="Menu" />
      <p className='text-gray-500 mb-4'>Choose from our delicious menu and enjoy your meal.</p>
      <CategoryTabs />
      <div className='flex items-start mt-4 gap-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-x-3 gap-y-4'>
          {
            dishes.map((item) => {
              return (
                <FoodCard key={item.id} item={item} />
              )
            })
          }
        </div>

        <FilterCard />
      </div>


    </Wrapper>
  )
}

export default Menu
