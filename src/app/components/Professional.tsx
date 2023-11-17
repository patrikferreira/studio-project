import React from 'react'
import style from '../page.module.css'
import { useRouter } from 'next/navigation'

type Props = {
    name: string,
    img: string
}

export default function Professional({name, img}: Props) {
    const router = useRouter();
  return (
    <div className={style.professional} onClick={() => {
        router.push('/service')
    }}>
        <div className={style.professionalDiv}>
            <div className={style.imgProfessional}>
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
        </div>
        <div className={style.icon}>
            <i className="fa-solid fa-play"></i>
        </div>
    </div>
  )
}
