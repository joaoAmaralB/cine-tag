import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import FavoritesProvider from '../../Contexts/FavoritesContext'
import { Outlet } from 'react-router-dom'

function BaseContainer() {
  return (
    <main>
        <Header/>
        <FavoritesProvider>
            <Outlet/>
        </FavoritesProvider>
        <Footer/>
    </main>
  )
}

export default BaseContainer