import React from 'react'
import style from '../page.module.css'

type Props = {
    img: string,
    name: string,
}

export default function Professional({img, name}: Props) {
  return (
    <div className={style.professional}>
        <div className={style.person}>
            <div className={style.imgDiv}>
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
        </div>
        <div className={style.icon}>
            <i className="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}
