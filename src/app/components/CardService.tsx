"use client"
import React, { useContext, useEffect, useState } from 'react'
import style from '../(aplication)/page.module.css'
import ConfirmButton from './ConfirmButton'
import Checkbox from './Checkbox'
import { dataContext } from '../store/DataContext'

type Service = {
    title: string,
    description: string,
    price: string
}

type Props = {
    service: Service,
    selected: (selected: string) => void
}

export default function CardService({ service, selected }: Props) {
    const ctx = useContext(dataContext);
    const [isChecked, setIsChecked] = useState(false);

    function handleServiceItemClick() {
        if (ctx.selectedProfessional) {
            setIsChecked(!isChecked);
            selected(service.title);
        }
    }

    function searchProfessional(service: Service) {
        if(ctx.professionals && !ctx.selectedProfessional) {
            const prof = ctx.professionals.find((prof) => prof.services.includes(service));
            return `Profissional: ${prof?.name}`;
        }
        return '';
    }

    console.log(searchProfessional(service))

    console.log(searchProfessional(service))

    return (
        <div className={style.serviceItem} onClick={handleServiceItemClick}>
            <div className={style.serviceTitle}>
                {ctx.selectedProfessional &&
                    <Checkbox checked={isChecked} />
                }
                <div className={style.serviceInfo}>
                    <h3>{service.title}</h3>
                    <p className={style.serviceDescription}>{service.description}</p>
                    <p>{searchProfessional(service)}</p>
                </div>
            </div>
            <p>{service.price}</p>
        </div>
  
)}
