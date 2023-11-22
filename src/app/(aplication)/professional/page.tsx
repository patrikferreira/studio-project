"use client"
import React, { useContext } from 'react'
import style from '../page.module.css'
import { useRouter } from 'next/navigation'
import StudioHeader from '../../components/StudioHeader'
import ProgressStatus from '../../components/ProgressStatus'
import Professional from '../../components/Professional'
import { dataContext } from '../../store/DataContext'

export default function page() {
    const router = useRouter();
    const ctx = useContext(dataContext);

  return (
    <div className={style.main}>
        <header className={style.header}>
          <StudioHeader />
          <ProgressStatus currentPage="professional" />
        </header>

        <div className={style.professionalContent}>
          {ctx.professionals.map((p) => {
            return <Professional professional={p} key={p.id}/>
          })}
        </div>

    </div>
  )
}
