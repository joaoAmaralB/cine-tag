import React from 'react'
import style from './Header.module.css'
import HeaderLink from './HeaderLink'

function Header() {
    return (
        <div className={style.header__container}>
            <img src="/images/logo.png" alt="Cine-tag logo"/>

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