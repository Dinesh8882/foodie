import React, { lazy, Suspense, useEffect, useState } from 'react'
import Sidebar from './shared/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const Menu = lazy(() => import("./pages/Menu"))
const Orders = lazy(() => import("./pages/Orders"))
const Favorites = lazy(() => import("./pages/Favorites"))
const Profile = lazy(() => import("./pages/Profile"))
const Settings = lazy(() => import("./pages/Settings"))
const Cart = lazy(() => import("./pages/Cart"))
const Checkout = lazy(() => import('./pages/Checkout'))
const PlaceOrder = lazy(() => import('./pages/PlaceOrder'))

import Loading from './shared/LoadingPage'

function App() {

  return (
    <div className='flex relative overflow-hidden'>
      <Sidebar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/menu' element={
            <Menu />
          } />
          <Route path='/orders' element={
            <Orders />
          } />
          <Route path='/favorites' element={
            <Favorites />
          } />
          <Route path='/profile' element={
            <Profile />
          } />
          <Route path='/settings' element={
            <Settings />
          } />
          <Route path='/cart' element={
            <Cart />
          } />

          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-place' element={<PlaceOrder />} />
        </Routes>
      </Suspense>
    </div >
  );
}

export default App;