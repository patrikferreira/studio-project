"use client"
import React, { useContext } from 'react'
import style from '../page.module.css'
import { useRouter } from 'next/navigation'
import StudioHeader from '../../components/StudioHeader'
import ProgressStatus from '../../components/ProgressStatus'
import Professional from '../../components/Professional'
import { dataContext } from '../../store/DataContext'
import Header from '@/app/components/Header'

export default function page() {
  const router = useRouter();
  const ctx = useContext(dataContext);

  return (
    <main className={style.professionalPage}>
      <Header element1={<StudioHeader />} element2={<ProgressStatus />} />

      <div className={style.professionalContent}>
        {ctx.professionals.map((p) => {
          return <Professional professional={p} key={p.id} />
        })}
      </div>
    </main>
  )
}
