import React from 'react'
import style from '../(aplication)/page.module.css'

type Props = {
    icon: string,
    desc1: string,
    desc2: string,
    desc3: string,
}

export default function AddresItem({icon, desc1, desc2, desc3}: Props) {
  return (
    <div className={style.addresItem}>
      <div className={style.addresIconDiv}>
        <i className={`${icon} ${style.colorIcon}`}></i>
      </div>
      <div className={style.addresDescription}>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p>{desc3}</p>
      </div>
    </div>
  )
}
