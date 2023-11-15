import React from 'react'
import style from './ErrorPage.module.css'

function ErrorPage() {
    return (
        <div className={style.errorpage__container}>
            <img width={'20%'} src="/images/error.jpg" alt="Error 404 image" />
            <div>
                <h1 className={style.error_title}>Oops!</h1>
                <p className={style.error_description}>The page you are looking for might have been removed had its name changed or its temporarily unavailabe.</p>
            </div>
        </div>
    )
}

export default ErrorPage