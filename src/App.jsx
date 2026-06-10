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
import Navbar from './shared/Navbar'
import useToggle from './shared/hooks/useToggle'

function App() {

  const { toggle: sidebarToggle, isOpen: isOpenSidebar } = useToggle(false)

  return (
    <div className='flex relative overflow-hidden h-screen'>

      <Sidebar isOpen={isOpenSidebar} toggle={sidebarToggle}/>
      <div className='w-full overflow-y-auto overflow-hidden'>
        <Navbar toggle={sidebarToggle} />
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
      </div>

    </div >
  );
}

export default App;