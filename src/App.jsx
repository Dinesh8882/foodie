import React, { Suspense, useEffect, useState } from 'react'
import Sidebar from './shared/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const Menu = React.lazy(() => import("./pages/Menu"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const Profile = React.lazy(() => import("./pages/Profile"))
const Settings = React.lazy(() => import("./pages/Settings"))

import Loading from './shared/LoadingPage'

function App() {

  return (
    <div className='flex'>
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/menu' element={
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        } />
        <Route path='/orders' element={
          <Suspense fallback={<Loading />}>
            <Orders />
          </Suspense>
        } />
        <Route path='/favorites' element={
          <Suspense fallback={<Loading />}>
            <Favorites />
          </Suspense>
        } />
        <Route path='/profile' element={
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        } />
        <Route path='/settings' element={
          <Suspense fallback={<Loading />}>
            <Settings />
          </Suspense>
        } />

      </Routes>
    </div >
  );
}

export default App;