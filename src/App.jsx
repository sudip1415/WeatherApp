import React from 'react'
import Weather from './Components/Weather';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <div className=' flex items-center gap-2 justify-center h-screen bg-slate-800'>
        <Home />
        <Routes>
          <Route path="Weather.jsx" element={<Weather />} />
        </Routes>
        {/* <Weather /> */}
      </div>

    </>
  )
}

export default App;