import React, { ReactNode } from 'react'
import style from '../(aplication)/page.module.css'

type Props = {
    children: ReactNode
}

export default function Header({children}: Props) {
  return (
    <div className={style.header}>
      {children}
    </div>
  )
}
