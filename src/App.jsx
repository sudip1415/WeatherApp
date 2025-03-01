import React from 'react'
import Weather from './Components/Weather';
import Home from './Components/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <div className=' flex items-center gap-2 bg-[url("/src/assets/background.jpg")] bg-no-repeat bg-cover bg-center justify-center h-screen'>
      
        <Weather />
      
      </div>
    </>
  )
}

export default App;
