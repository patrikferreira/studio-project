"use client"
import React from 'react'
import style from '../page.module.css'
import PageFooter from './PageFooter'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter();
  return (
    <div className={style.footer}>
      <PageFooter icon='fa-solid fa-house' description='Inicio' action={() => {
        router.push("/");
      }}/>
      <PageFooter icon='fa-solid fa-calendar-days' description='Agendar' action={() => {
        router.push("/professional");
      }}/>
    </div>
  )
}
