"use client"
import React, { useEffect, useState } from 'react'
import style from '../(aplication)/page.module.css'
import { useRouter } from 'next/navigation'
import ImageProfessional from '../../../public/Assets/ficticia-perfil.png'
import StudioName from './StudioName';
import Image from 'next/image';

export default function StudioHeader() {
  const router = useRouter();
  const [changeStyles, setChangeStyles] = useState<boolean>(false);

  function goBack() {
    router.back()
  }

  useEffect(() => {
    setTimeout(() => {
      setChangeStyles(true)
    }, 5000);

  }, [])

  return (
    <div className={style.studioHeader}>
      <div className={`${style.divReturn} ${changeStyles && style.changeStyle}`} onClick={goBack}>
        <i className="fa-solid fa-chevron-left"></i>
        <span className={`${changeStyles && style.changeStyleSpan}`}>Voltar</span>
      </div>

      <div className={style.divStudio}>
        <div className={style.imgStudioHeader}>
          <Image
            src={ImageProfessional}
            alt="Imagem da profissional"
            width={60}
          />
        </div>
        <StudioName />
      </div>
    </div>
  )
}
