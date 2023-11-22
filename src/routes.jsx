import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Player from './pages/Player'
import ErrorPage from './components/ErrorPage'
import BaseContainer from './components/BaseContainer'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<BaseContainer/>}>
            <Route index element={<Home />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path=':id/player' element={<Player />} />
            <Route path='favorites/:id/player' element={<Player />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes