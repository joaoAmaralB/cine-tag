import React from 'react'
import styled from 'styled-components'
import { useFavoritesContext } from '../../Contexts/FavoritesContext'

const StyledFigure = styled.figure`
  width: 282px;
  max-width: 100%;
  margin: 0;
  background-color: var(--gray);

  img {
    width: 100%;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 1rem;

    h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
    }

    button {
      border: none;
      background-color: transparent;
      width: 30px;
    }
  }
`

function Card({ id, title, url, link }) {
  const { favorite, addFavorite } = useFavoritesContext()
  const isFav = favorite.some(fav => fav.id === id)
  const src = isFav ? '/images/favorite.png' : '/images/favorite_outline.png'

  return (
    <StyledFigure>
      <img src={url} alt={title} />
      <figcaption>
        <h2>{title}</h2>
        <button onClick={() => addFavorite({ id, title, url, link })}><img src={src} alt="Like button" /></button>
      </figcaption>
    </StyledFigure>
  )
}

export default Card