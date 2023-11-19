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
    service: Service
}

export default function CardService(data: Props) {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const ctx = useContext(dataContext);
    const [isChecked, setIsChecked] = useState(false);

    function handleServiceSelection(service: Service) {
        
    }

    function handleServiceItemClick() {
        setIsChecked(!isChecked);
    }

  return (
    <div className={style.serviceContent}>
        <div className={style.serviceItem} onClick={handleServiceItemClick}>
            <div className={style.serviceTitle}>
            <Checkbox checked={isChecked}/>
            <div>
                <h3>{data.service.title}</h3>
                <p className={style.serviceDescription}>{data.service.description}</p>
            </div>
            </div>
            <p>{data.service.price}</p>
        </div>
    </div>
  )
}
