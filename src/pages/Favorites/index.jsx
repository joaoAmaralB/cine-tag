import React from 'react'
import Banner from '../../components/Banner'
import EmptyPage from '../../components/EmptyPage'
import FavMovies from '../../components/FavMovies'
import styled from 'styled-components'
import { useFavoritesContext } from '../../Contexts/FavoritesContext'

const FavoritesContainer = styled.div`
    
`

function Favorites() {
    const { favorite } = useFavoritesContext()

    return (
        <FavoritesContainer>
            <Banner url={"/images/banner-favoritos.png"}/>
            {favorite.length !== 0 ? <FavMovies/> : <EmptyPage/> }           
        </FavoritesContainer>
    )
}

export default Favorites