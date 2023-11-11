import React from 'react'
import style from '../../page.module.css'

type Props = {
    bg: string
}

export default function Bar({bg}: Props) {
  return (
    <div className={style.bar} style={{background: bg}}> 
    </div>
  )
}
