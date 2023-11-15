import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Header from './components/Header'
import Footer from './components/Footer'
import FavoritesProvider from './Contexts/FavoritesContext'
import Player from './pages/Player'
import ErrorPage from './components/ErrorPage'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <FavoritesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/:id/player' element={<Player />} />
          <Route path='/favorites/:id/player' element={<Player />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </FavoritesProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes