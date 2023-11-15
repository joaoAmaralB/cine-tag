import React from 'react'
import style from './Header.module.css'
import HeaderLink from './HeaderLink'
import { useNavigate } from 'react-router-dom'

function Header() {
    const nav = useNavigate()

    return (
        <div className={style.header__container}>
            <img src="/images/logo.png" alt="Cine-tag logo" className={style.image} onClick={() => nav('/')}/>

            <nav className={style.header_links}>
                <HeaderLink url={'/'}>
                    Home
                </HeaderLink>
                <HeaderLink url={'/favorites'}>
                    Favorites
                </HeaderLink>
            </nav>
        </div>
    )
}

export default Header