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
  const [selectedService, setSelectedService] = useState<string[]>([]);
  const ctx = useContext(dataContext);
  const router = useRouter();


  function generateMessage() {
    const formatedMessage = selectedService.length > 1 ? 'os seguintes serviços' : 'o serviço'
    if (ctx.selectedProfessional && selectedService.length > 0) {
      setMessage(`Olá! Gostaria de agendar ${formatedMessage}: ${selectedService}, com o(a) ${ctx.selectedProfessional.name}. Estou interessado(a) em marcar uma data. Como podemos prosseguir?`)
    }
  }

  function sendMessage() {
    window.open(`https://whatsa.me/5585998473291/?t=${message}`)
  }

  function redirectRoute() {
    router.push('/professional');
  }


  function selectedServiceA(service: string) {
    if (!selectedService.includes(service)) {
      setSelectedService(prevSelectedServices => [...prevSelectedServices, service])
    }
    if (selectedService.includes(service)) {
      let newArray = [...selectedService]
      let indexItem = newArray.indexOf(service);
      if (indexItem !== -1)
        newArray.splice(indexItem, 1)
      setSelectedService(newArray)

    }
  }



  useEffect(() => {
    generateMessage()
  }, [selectedService])

  return (
    <div className={style.service}>
      <header className={style.header}>
        <StudioHeader />
        <ProgressStatus />
      </header>

      <div className={style.serviceContent}>
        {ctx.selectedProfessional &&
          ctx.selectedProfessional.services.map((s) => {

            return <CardService service={s} key={s.title} selected={selectedServiceA} />
          })}

        {!ctx.selectedProfessional &&
          ctx.services.map((s) => {

            return <CardService service={s} key={s.title} selected={selectedServiceA} />
          })}
      </div>

      {ctx.selectedProfessional &&
        <div className={style.buttonWhatsappDiv}>
          <ConfirmButton action={sendMessage} title='Confirmar' icon='fa-brands fa-whatsapp' />
        </div>
      }

      {!ctx.selectedProfessional &&
        <div className={style.buttonWhatsappDiv}>
          <ConfirmButton action={redirectRoute} title='Profissionais' icon='' />
        </div>
      }
    </div>
  )
}
