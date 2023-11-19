import React from 'react'
import style from '../(aplication)/page.module.css'

type Props = {
    icon: string,
    description: string,
}

export default function RouteButton({icon, description}: Props) {
  return (
    <div className={style.routeButton}>
        <i className={`${icon} ${style.colorIcon}`}></i>
        <p>{description}</p>
    </div>
  )
}
