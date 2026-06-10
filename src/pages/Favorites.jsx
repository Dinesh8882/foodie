import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'
import { favorites } from '../data/favorites'
import FoodCard from '../shared/FoodCard'
import FavoriteCard from '../features/favorite/FavoriteCard'
import EmptyFavoriteCard from '../features/favorite/EmptyFavoriteCard'
import DishCard from '../features/favorite/DishCard'
import { FiChevronRight } from 'react-icons/fi'

function Favorites() {
  return (
    <Wrapper>
      <div>
        <SectionHeading title="My Favorites" />
        <p className='text-gray-500 mb-4'>Your favorite dishes, all in one place.</p>
      </div>
      <div className='flex flex-col md:flex-row items-start gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-x-3 gap-y-4'>
          {
            favorites.map((item) => {
              return (
                <FoodCard key={item.id} item={item} />
              )
            })
          }
        </div>
        <div className='flex sm:w-60 flex-col gap-4 '>
          <FavoriteCard />
          <EmptyFavoriteCard />
          <div className='bg-white rounded-xl p-4  flex flex-col gap-3'>
            <h3>You might also like</h3>
            <DishCard />
            <DishCard />
            <DishCard />
            <button className=" flex items-center justify-between py-4">
              <span className="text-sm font-medium text-gray-800">
                Explore Menu
              </span>

              <FiChevronRight className="text-orange-500 text-lg" />
            </button>
          </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default Favorites
