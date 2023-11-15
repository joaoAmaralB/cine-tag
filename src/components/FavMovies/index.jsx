import React from 'react'
import style from './FavMovies.module.css'
import Card from '../Card'
import { useFavoritesContext } from '../../Contexts/FavoritesContext'

function FavMovies() {
  const { favorite } = useFavoritesContext()

  return (
    <div className={style.FavMovies__container}>
      <h1 className={style.title}>Favorites</h1>

      <div className={style.cards__container}>
        {favorite.map((fav) => {
          return (
            <Card key={fav.id} id={fav.id} title={fav.title} url={fav.url} link={fav.link} />
          )
        })}
      </div>
    </div>
  )
}

export default FavMovies