import React from 'react'
import style from '../(aplication)/page.module.css'

export default function ProgressStatusService() {
  return (
    <div className={style.progressStatus}>
      <div className={style.divStatusProfessional}>
        <div className={style.divColor} style={{background: '#F87C09'}}>
          1
        </div>
        <p>Catálogo de serviços</p>
      </div>
    </div>
  )
}
