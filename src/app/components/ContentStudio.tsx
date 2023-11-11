import React from 'react'
import style from '../page.module.css'

type Props = {
    name: string
}

export default function ContentStudio({name}: Props) {
  return (
    <div className={style.contentStudio}>
      <div className={style.imgDiv}>
        <img src="assets/ficticia-perfil.png" alt="" />
      </div>
      <p>{name}</p>
    </div>
  )
}
