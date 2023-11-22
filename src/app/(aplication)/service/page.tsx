"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from '../page.module.css'
import StudioHeader from '../../components/StudioHeader'
import ProgressStatus from '../../components/ProgressStatus'
import CardService from '../../components/CardService'
import ConfirmButton from '../../components/ConfirmButton'
import { dataContext } from '../../store/DataContext'
import { useRouter } from 'next/navigation'

type Service = {
  title: string,
  description: string,
  price: string
}

export default function page() {
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const ctx = useContext(dataContext);
  const router = useRouter();

  useEffect(() => {
    if(ctx.selectedProfessional == null) {
      router.push('/professional');
    }
  }, [])

  useEffect(() => {
    if(ctx.selectedProfessional && selectedService.length > 0) {
      setMessage(`Gostaria de agendar os serviços ${selectedService} com o(a) ${ctx.selectedProfessional.name}`)
    }
  }, [ctx.selectedProfessional, selectedService])

  function selectedServiceA(service: string) {
    setSelectedService(prevSelectedServices => [...prevSelectedServices, service])
  }

  return (
    <div className={style.service}>
      <header className={style.header}>
          <StudioHeader />
          <ProgressStatus />
        </header>

        <div className={style.serviceContent}>
          {ctx.selectedProfessional?.services.map((s) => {
      
            return <CardService service={s} key={s.title} selected={selectedServiceA}/>
          })}
        </div>

        <div className={style.buttonWhatsappDiv}>
            <ConfirmButton message={message}/>
  
        </div>

      
    </div>
  ) 
}
