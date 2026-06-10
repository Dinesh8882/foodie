import React from 'react'
import Navbar from './Navbar';

function Wrapper({ children }) {
  

  return (
    <div className="flex-1 w-full h-screen ">
      <div className='px-6 py-4'>
        {children}
      </div>
    </div>
  );
}

export default Wrapper
