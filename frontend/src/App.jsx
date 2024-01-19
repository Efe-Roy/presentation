import React from 'react'
import Home from './page/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SliderRange from './page/SliderRange'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/s" element={<SliderRange />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App