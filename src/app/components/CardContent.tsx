"use client"
import React, { useContext } from 'react'
import style from '../(aplication)/page.module.css'
import { dataContext } from '../store/DataContext'
import Professional from '../components/Professional'

export default function CardContent() {
    const ctx = useContext(dataContext);
    return (
        <div className={style.cardContent}>
            {ctx.professionals.map((p) => {
                return <Professional professional={p} img={p.importImg} key={p.id} />
            })}
        </div>
    )
}
