import React from 'react'
import style from '../page.module.css'

type Props = {
    icon: string,
    description: string,
    action?: () => void
}

export default function RouteButton({icon, description, action}: Props) {
  return (
    <div className={style.routeButton} onClick={action}>
        <i className={`${icon} ${style.colorIcon}`}></i>
        <p>{description}</p>
    </div>
  )
}
