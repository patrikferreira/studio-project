import React from 'react'
import style from '../(aplication)/page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import NameStudio from './NameStudio';

export default function StudioHeader() {
  const router = useRouter();

  function goBack() {
    router.back();
  }
  
  return (
    <div className={style.studioHeader}>
        <div className={style.divReturn} onClick={goBack}>
          <div className={style.imgStudioHeader}>
            <img src="assets/ficticia-perfil.png" alt="" />
          </div>
          <NameStudio />
        </div>
    </div>
  )
}
