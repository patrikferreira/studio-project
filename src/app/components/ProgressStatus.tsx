import React, { useContext } from 'react';
import style from '../(aplication)/page.module.css'
import { dataContext } from '../store/DataContext';

export default function ProgressStatus() {

  const ctx = useContext(dataContext)
  return (
    <div className={style.progressStatus}>
      <div className={style.divStatusProfessional}>
        <div className={style.divColor} style={{background: '#f39033'}}>
          1
        </div>
        <p>Selecione um Profissional</p>
      </div>

      <span className={`${style.bar} ${ctx.selectedProfessional ? style.orangeColor : ''}`}></span>

      <div className={style.divStatusService}>
        <div className={`${style.divColor} ${ctx.selectedProfessional ? style.orangeColor : ''}`}>
          2
        </div>
        <p>Selecione um Serviço</p>
      </div>
    </div>
  );
}
