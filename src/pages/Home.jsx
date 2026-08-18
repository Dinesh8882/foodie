import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'

import CategoryTabs from '../shared/CategoriesTabs'
import SectionHeading from '../shared/SectionHeading'
import FoodCard from '../shared/FoodCard'

import CheckOut from '../shared/CheckOut'
import { useDispatch, useSelector } from 'react-redux'
import { useCart } from '../features/cart/hook/useCart'
import { useFavorite } from '../features/favorite/hook/useFavorite'

function Home() {

    const dispatch = useDispatch()
    const dishes = useSelector((state) => state.product.products)
    const cartItems = useSelector((state) => state.cart.cartItem)
    const { addCartItem, deleteCartItem } = useCart()
    const { addFavoItem, favoriteItems, removeFavoItem } = useFavorite()
    const order = useSelector((state) => state.order.orders)



    return (
        <Wrapper>
            <SectionHeading title="Populer Dishes" varient="home" />
            <CategoryTabs />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-x-3 gap-y-4'>
                {
                    dishes.map((item) => {
                        const isAdd = cartItems.some((cart) => cart.id === item.id)
                        const isFavorite = favoriteItems.some((favo) => favo === item.id)

                        return (
                            <FoodCard
                                isAdd={isAdd}
                                isFavorite={isFavorite}

                                addCartItem={addCartItem}
                                deleteItem={deleteCartItem}
                                addFavoItem={addFavoItem}
                                removeFavoItem={removeFavoItem}
                                key={item.id}
                                item={item} />
                        )
                    })
                }
            </div>
        </ Wrapper >
    )
}

export default Home
