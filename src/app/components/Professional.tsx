import React, { useContext } from 'react'
import style from '../(aplication)/page.module.css'
import { Professional, dataContext } from '../store/DataContext'
import Link from 'next/link'

type Props = {
    professional: Professional
}

export default function Professional({professional}: Props) {
    const ctx = useContext(dataContext);
  return (
    <Link href={'/service'}>
        <div className={style.professional} onClick={() => {
        ctx.setProfessional(professional)
        }}>
        <div className={style.professionalDiv}>
            <div className={style.imgProfessional}>
                <img src={professional.img} alt="" />
            </div>
            <p>{professional.name}</p>
        </div>
        <div className={style.icon}>
            <i className="fa-solid fa-play"></i>
        </div>
        </div>
    </Link>
  )
}
