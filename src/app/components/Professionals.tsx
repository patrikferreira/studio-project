import React from 'react'
import style from '../page.module.css'
import Professional from './Professional'

export default function Professionals() {
  return (
    <div className={style.professionals}>
      <Professional img='assets/ficticia-perfil.png' name='Aila Thayna'/>
      <Professional img='assets/ficticia-perfil.png' name='Aila Thayna'/>
      <Professional img='assets/ficticia-perfil.png' name='Aila Thayna'/>
      <Professional img='assets/ficticia-perfil.png' name='Aila Thayna'/>
    </div>
  )
}
