import React, { useContext } from 'react'
import style from '../(aplication)/page.module.css'
import { Professional, dataContext } from '../store/DataContext'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    professional: Professional,
    img: string
}

export default function Professional({ professional, img }: Props) {
    const ctx = useContext(dataContext);

    return (
        <Link href={'/service'}>
            <div className={style.professionalCard} onClick={() => {
                ctx.setProfessional(professional)
            }}>
                <div className={style.professionalDiv}>
                    <div className={style.imgProfessional}>
                        <div className={style.imgPerfilProfessional}>
                            <Image
                                src={img}
                                alt="Imagem da profissional"
                                width={150}
                                height={150}
                            />
                        </div>
                        <p>{professional.name}</p>
                    </div>
                    <div className={style.colorIcon}>
                        <i className="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
        </Link>
    )
}
