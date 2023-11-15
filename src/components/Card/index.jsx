import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
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

    h2:hover {
      cursor: pointer;
    }

    button {
      border: none;
      background-color: transparent;
      width: 30px;
      align-self: flex-start;
    }
  }
`

function Card({ id, title, url, link }) {
  const { favorite, addFavorite } = useFavoritesContext()
  const isFav = favorite.some(fav => fav.id === id)
  const src = isFav ? '/images/favorite.png' : '/images/favorite_outline.png'

  const nav = useNavigate()

  return (
    <StyledFigure>
      <img src={url} alt={title} />
      <figcaption>
        <h2 onClick={() => nav(`${id}/player`)}>{title}</h2>
        <button onClick={() => addFavorite({ id, title, url, link })}><img src={src} alt="Like button" /></button>
      </figcaption>
    </StyledFigure>
  )
}

export default Card