import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Header from './components/Header'
import Footer from './components/Footer'
import FavoritesProvider from './Contexts/FavoritesContext'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes