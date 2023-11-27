"use client"
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import style from '../(aplication)/page.module.css'
import { dataContext } from '../store/DataContext';

export default function Footer() {
  const router = useRouter();
  const ctx = useContext(dataContext);

  function handleService(route: string) {
    router.push(route);
    ctx.setProfessional(null);
  }

  return (
    <div className={style.footer}>
      <div className={style.itemFooter} onClick={() => {
        handleService('/')
      }}>
        <i className="fa-solid fa-house"></i>
        <p>INÍCIO</p>
      </div>
      <div className={style.itemFooter} onClick={() => {
        handleService('/professional')
      }}>
        <i className="fa-solid fa-calendar-days"></i>
        <p>AGENDAR</p>
      </div>
      <div className={style.itemFooter} onClick={() => {
        handleService('/service')
      }}>
        <i className="fa-solid fa-file-pen"></i>
        <p>SERVIÇOS</p>
      </div>
      <div className={style.itemFooter} onClick={() => {
        handleService('/address')
      }}>
        <i className="fa-solid fa-location-dot"></i>
        <p>ENDEREÇO</p>
      </div>
    </div>
  )
}
