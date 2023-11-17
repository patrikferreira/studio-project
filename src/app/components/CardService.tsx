import React from 'react'
import style from '../page.module.css'
import ConfirmButton from './ConfirmButton'

type Service = {
    title: string,
    description: string,
    price: string
}

type Props = {
    service: Service
}

export default function CardService(data: Props) {
  return (
    <div className={style.serviceContent}>
        <div className={style.serviceItem}>
            <div className={style.serviceTitle}>
                <h3>{data.service.title}</h3>
                <p>{data.service.description}</p>
            </div>
            <ConfirmButton message={data.service.title} />
            <p>{data.service.price}</p>
            <p>tag teste</p>
        </div>
    </div>
  )
}
