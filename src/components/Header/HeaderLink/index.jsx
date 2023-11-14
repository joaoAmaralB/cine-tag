import React from 'react'
import { Link } from 'react-router-dom'
import style from './HeaderLink.module.css'

function HeaderLink({ children, url }) {
  return (
    <Link className={style.links} to={url}>
        {children}
    </Link>
  )
}

export default HeaderLink