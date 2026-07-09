import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'
import FavoriteCard from '../features/favorite/component/FavoriteCard'
import EmptyFavoriteCard from '../features/favorite/component/EmptyFavoriteCard'
import DishCard from '../features/favorite/component/DishCard'
import { FiChevronRight } from 'react-icons/fi'
import { useFavorite } from '../features/favorite/hook/useFavorite'
import { useSelector } from 'react-redux'
import { useCart } from '../features/cart/hook/useCart'

function Favorites() {
  const { favoriteItems, addFavoItem, removeFavoItem } = useFavorite()
  const { addCartItem, deleteCartItem, items } = useCart()
  const products = useSelector((state) => state.product.products)
  const cartItems = useSelector((state) => state.cart.cartItem)


  return (
    <Wrapper>
      <div>
        <SectionHeading title="My Favorites" />
        <p className='text-gray-500 mb-4'>Your favorite dishes, all in one place.</p>
      </div>
      <div className='flex flex-col md:flex-row items-start gap-4'>
        {
          favoriteItems.length !== 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-x-3 gap-y-4'>
              {favoriteItems.map((item, id) => {

                const product = products.find((p) => p.id === item)
                const isAdd = cartItems.some((cart) => cart.id === item)
                const isFavorite = favoriteItems.some((favo) => favo.id === item.id)


                return (
                  <FoodCard
                    key={id}
                    isFavorite={isFavorite}

                    isAdd={isAdd}
                    item={product}
                    addCartItem={addCartItem}
                    addFavoItem={addFavoItem}
                    removeFavoItem={removeFavoItem}
                    deleteItem={deleteCartItem}
                  />
                )
              })}
            </div>
          ) : (
            <div className='text-xl mt-10 text-center bg w-full text-gray-500'>
              <h3>Your favorites are empty. ❤️</h3>
              <p>Browse our collection and tap the heart icon to save your favorite items.</p>
            </div>
          )
        }

        <div className='flex sm:w-60 flex-col gap-4 '>
          <FavoriteCard favoriteItems={favoriteItems} />
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
