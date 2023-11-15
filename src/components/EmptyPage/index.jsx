import React from 'react'
import style from './EmptyPage.module.css'

function EmptyPage() {
  return (
    <div className={style.emptypage__container}>
      <img width={'16%'} src="/images/empty-list.png" alt="Empty List Image" />
      <div>
        <h2>Your favorite list is empty</h2>
        <p>Select videos from the home page.</p>
      </div>
    </div>

  )
}

export default EmptyPage