"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from '../page.module.css'
import AddresItem from '@/app/components/AddresItem'
import { Wrapper, Status } from "@googlemaps/react-wrapper";


export default function page() {

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
          <AddresItem icon='fa-solid fa-location-dot' desc1='Nosso Endereço' desc2='Rua Paraiso Verde, 698' desc3='Fortaleza / CE CEP 05102-010' />
          <AddresItem icon='fa-solid fa-phone-volume' desc1='Celular/Email' desc2='(11) 98662-8884' desc3='contato@studiomalima.com.br' />
          <AddresItem icon='fa-regular fa-clock' desc1='Horários de Funcionaento' desc2='Terça - Sexta: 10:00 - 20:00' desc3='Sábado: 09:00 - 20:00' />
        </div>
      </div>

      <div className={style.addresMap}>
        
      </div>

    </div >
  )
} 
