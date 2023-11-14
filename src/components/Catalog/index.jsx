import React from 'react'
import Card from '../Card'
import catalog from '../../jsons/db.json'
import style from './Catalog.module.css'

function Catalog() {
  return (
    <div className={style.catalog__container}>
      <h1 className={style.title}>A place to store your videos and movies!</h1>

      <div className={style.cards__container}>
        {catalog.map(movie => {
          return (
            <Card key={movie.id} id={movie.id} title={movie.titulo} url={movie.capa} link={movie.link} />
          )
        })}
      </div>
    </div>
  )
}

export default Catalog