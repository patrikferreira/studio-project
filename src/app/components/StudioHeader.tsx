import React from 'react'
import style from '../(aplication)/page.module.css'

export default function StudioHeader() {
  return (
    <div className={style.studioHeader}>
        <div className={style.imgStudioHeader}>
            <img src="assets/ficticia-perfil.png" alt="" />
        </div>
        <p>Studio Ayla</p>
    </div>
  )
}
