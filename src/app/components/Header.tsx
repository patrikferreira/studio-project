import React, { ReactNode } from 'react'
import style from '../(aplication)/page.module.css'

type Props = {
    element1: ReactNode | null,
    element2: ReactNode | null
}

export default function Header({element1, element2}: Props) {
  return (
    <div className={style.header}>
      {element1}
      {element2}
    </div>
  )
}
