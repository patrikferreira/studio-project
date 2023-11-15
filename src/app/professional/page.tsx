"use client"
import React from 'react'
import style from '../page.module.css'
import Footer from '../components/Footer'
import { useRouter } from 'next/navigation'
import StudioHeader from '../components/StudioHeader'
import ProgressStatus from '../components/ProgressStatus'

export default function page() {
    const router = useRouter();
  return (
    <div className={style.main}>
        <header className={style.header}>
          <StudioHeader />
          <ProgressStatus currentPage="professional" />
        </header>

        <Footer />
    </div>
  )
}
