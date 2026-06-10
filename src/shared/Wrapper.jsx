import React from 'react'
import Navbar from './Navbar';

function Wrapper({ children }) {
  
  const 
  return (
    <div className="flex-1 w-full overflow-hidden bg-gray-100 overflow-y-auto h-screen sm:rounded-l-xl">
      <Navbar />
      <div className='px-6 py-4'>
        {children}
      </div>
    </div>
  );
}

export default Wrapper
