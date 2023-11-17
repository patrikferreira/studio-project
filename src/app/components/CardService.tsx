import React from 'react'
import style from '../page.module.css'
import ConfirmButton from './ConfirmButton'
import Checkbox from './Checkbox'

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
            <Checkbox/>
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
