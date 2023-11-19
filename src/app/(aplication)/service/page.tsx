"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from '../page.module.css'
import StudioHeader from '../../components/StudioHeader'
import ProgressStatus from '../../components/ProgressStatus'
import CardService from '../../components/CardService'
import ConfirmButton from '../../components/ConfirmButton'
import { dataContext } from '../../store/DataContext'
import { useRouter } from 'next/navigation'

export default function page() {
  const [message, setMessage] = useState('');
  const ctx = useContext(dataContext);
  const router = useRouter();

  useEffect(() => {
    if(ctx.selectedProfessional == null) {
      router.push('/professional');
    }
  }, [])

  return (
    <div className={style.service}>
      <header className={style.header}>
          <StudioHeader />
          <ProgressStatus currentPage="service" />
        </header>

        <div className={style.serviceContent}>
          {ctx.selectedProfessional?.services.map((s) => {
            return <CardService service={s} key={s.title}/>
          })}
        </div>

        <div className={style.buttonWhatsappDiv}>
            <ConfirmButton message='aa'/>
        </div>

      
    </div>
  ) 
}
