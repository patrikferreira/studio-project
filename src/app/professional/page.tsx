import React from 'react'
import styles from '../page.module.css'
import Header from '../components/Header'
import Professionals from '../components/Professionals'
import Footer from '../components/Footer'

export default function page() {

  return (
    <main className={styles.main}>
        <Header />
        <Professionals />
        <Footer />
    </main>
  )
}
