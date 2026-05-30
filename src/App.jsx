import React from 'react'
import Sidebar from './shared/Sidebar';


function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 rounded-l-xl">
        Main Content
      </div>
    </div>
  );
}

export default App;