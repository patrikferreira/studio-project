"use client"
import React from 'react'
import style from '../page.module.css'
import StudioHeader from '../components/StudioHeader'
import ProgressStatus from '../components/ProgressStatus'
import Footer from '../components/Footer'
import serviceData from '../components/Services'
import CardService from '../components/CardService'
import ConfirmButton from '../components/ConfirmButton'

export default function page() {
  return (
    <div className={style.service}>
      <header className={style.header}>
          <StudioHeader />
          <ProgressStatus currentPage="service" />
        </header>

        <div className={style.serviceContent}>
          {serviceData.map((data) => (
            <CardService service={data}/>
          ))}
        </div>

        <div className={style.buttonWhatsappDiv}>
            <button className={style.buttonWhatsapp}>
              
            </button>
        </div>

        

        <Footer />
    </div>
  )
}
