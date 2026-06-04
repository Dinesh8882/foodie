import React, { Suspense, useEffect, useState } from 'react'
import Sidebar from './shared/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Menu = React.lazy(() => import("./pages/Menu"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const Profile = React.lazy(() => import("./pages/Profile"))
const Settings = React.lazy(() => import("./pages/Settings"))
const Cart = React.lazy(() => import("./pages/Cart"))

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
        </Routes>
      </Suspense>
    </div >
  );
}

export default App;