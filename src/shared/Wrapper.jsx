import React from 'react'
import Navbar from './Navbar';

function Wrapper({ children }) {
  return (
    <div className="flex-1 overflow-hidden bg-gray-100 overflow-y-auto h-screen rounded-l-xl">
      <Navbar />
      <div className='px-6 py-4'>
        {children}
      </div>
    </div>
  );
}

export default Wrapper
