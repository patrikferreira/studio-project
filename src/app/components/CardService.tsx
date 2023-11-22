"use client"
import React, { useContext, useState } from 'react'
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

export default function CardService({service, selected}: Props) {
    const ctx = useContext(dataContext);
    const [isChecked, setIsChecked] = useState(false);

    function handleServiceItemClick() {
        setIsChecked(!isChecked);
        selected(service.title);   
    }

  return (
    <div className={style.serviceContent}>
        <div className={style.serviceItem} onClick={handleServiceItemClick}>
            <div className={style.serviceTitle}>
            <Checkbox checked={isChecked}/>
            <div>
                <h3>{service.title}</h3>
                <p className={style.serviceDescription}>{service.description}</p>
            </div>
            </div>
            <p>{service.price}</p>
        </div>
    </div>
  )
}
