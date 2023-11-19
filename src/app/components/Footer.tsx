"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import style from '../(aplication)/page.module.css'

export default function Footer() {
    const router = useRouter();
  return (
    <div className={style.footer}>
      <div className={style.itemFooter} onClick={() => {
              router.push('/')
            }}>
        <i className="fa-solid fa-house"></i>
        <p>INÍCIO</p>
      </div>
      <div className={style.itemFooter} onClick={() => {
              router.push('/professional')
            }}>
        <i className="fa-solid fa-calendar-days"></i>
        <p>AGENDAR</p>
      </div>
      <div className={style.itemFooter} onClick={() => {
              router.push('/service')
            }}>
      <i className="fa-solid fa-file-pen"></i>
        <p>SERVIÇOS</p>
      </div>
    </div>
  )
}
