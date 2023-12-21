"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { dataContext } from '../store/DataContext';
import { useRouter } from 'next/navigation';
import Header from './Header';
import StudioHeader from './StudioHeader';
import ProgressStatus from './ProgressStatus';
import style from '../(aplication)/page.module.css'
import CardService from './CardService';
import ConfirmButton from './ConfirmButton';

export default function ServicePageList() {
    const [message, setMessage] = useState('');
    const [selectedService, setSelectedService] = useState<string[]>([]);
    const ctx = useContext(dataContext);
    const router = useRouter();
    const ref = useRef(false)


    function generateMessage() {
        const formatedMessage = selectedService.length > 1 ? 'os seguintes serviços' : 'o serviço'
        if (ctx.selectedProfessional && selectedService.length > 0) {
            setMessage(`Olá! Gostaria de agendar ${formatedMessage}: ${selectedService}, com o(a) ${ctx.selectedProfessional.name}. Estou interessado(a) em marcar uma data. Como podemos prosseguir?`)
        }
    }

    function buttonDisabled() {
        return !!selectedService.length
    }

    function sendMessage() {
        window.open(`https://whatsa.me/5585991969249/?t=${message}`)
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

    useEffect(() => {
        return () => {
            if (ref.current) {
                ctx.setProfessional(null)
            }
            ref.current = true
        }
    }, [router])
    return (
        <div className={style.servicePage}>
            <Header>
                <StudioHeader />
                <ProgressStatus service={selectedService.length > 0 ? true : false} />
            </Header>

            <div className={style.serviceContent}>
                <div className={style.services}>
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
                    <div className={`${style.buttonWhatsappDiv}`}>
                        <ConfirmButton disabled={!buttonDisabled()} action={sendMessage} title='Confirmar' icon='fa-brands fa-whatsapp' />
                    </div>
                }
                {!ctx.selectedProfessional &&
                    <div
                        className={style.buttonWhatsappDiv}>
                        <ConfirmButton disabled={false} action={redirectRoute} title='Profissionais' icon='' />
                    </div>
                }
            </div>
        </div >
    )
}
