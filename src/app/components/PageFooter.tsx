import React from 'react'
import style from '../page.module.css'

type Props = {
    icon: string,
    description: string,
    action?: () => void
}

export default function PageFooter({icon, description, action}: Props) {
  return (
    <div className={style.page} onClick={action}>
        <i className={icon}></i>
        <p>{description}</p>
    </div>
  )
}
