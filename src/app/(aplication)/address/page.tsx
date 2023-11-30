"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from '../page.module.css'
import AddresItem from '@/app/components/AddresItem'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ConfirmButton from '@/app/components/ConfirmButton';


export default function page() {

  function redirectMap() {
    window.open(`https://www.google.com/maps/place/R.+Ciro+Bilhar,+1092+-+Centro,+Horizonte+-+CE,+62880-081/@-4.1046852,-38.4967076,18.02z/data=!4m6!3m5!1s0x7b8b01021a23345:0x44a0a566b801dc04!8m2!3d-4.1043784!4d-38.4957503!16s%2Fg%2F11c262rpdf?entry=ttu`)
  }

  return (
    <div className={style.addresComponent}>
      <header className={`${style.header} ${style.headerAddres}`}>
        <div className={style.studioHeaderAddres}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Malima Stúdio</p>
        </div>
      </header>

      <div className={style.addresContent}>
        <div className={style.addresInfo}>
          <AddresItem icon='fa-solid fa-location-dot' desc1='Nosso Endereço' desc2='Rua Ciro Bilhar, 1092' desc3='Horizonte / CE CEP 62880-081' />
          <AddresItem icon='fa-solid fa-phone-volume' desc1='Celular/Email' desc2='(85) 99196-9249' desc3='mlimasoares349@gmail.com' />
          <AddresItem icon='fa-regular fa-clock' desc1='Horários de Funcionamento' desc2='Terça - Sexta: 09:00 - 18:00' desc3='Sábado: 09:00 - 17:00' />
        </div>
        <div className={style.addresMap}>
          <img src="assets/map.png" alt="" />
          <ConfirmButton disabled={false} action={redirectMap} title='Como chegar' icon='' />
        </div>
      </div>


    </div >
  )
} 
