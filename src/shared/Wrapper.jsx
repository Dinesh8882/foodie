import React from 'react'

function Wrapper({ children }) {
  return (
    <div className="flex-1 p-8 bg-gray-100 rounded-l-xl">
      {children}
    </div>
  );
}

export default Wrapper
