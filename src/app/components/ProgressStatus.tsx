import React, { useContext } from 'react';
import style from '../(aplication)/page.module.css'
import { dataContext } from '../store/DataContext';

type Props = {
    currentPage: string,
}

export default function ProgressStatus({ currentPage }: Props) {

  const ctx = useContext(dataContext)
  return (
    <div className={style.progressStatus}>
      <div className={style.divStatusProfessional}>
        <div className={`${style.divColor} ${currentPage === 'professional' ? style.orangeColor : ''}`}>
          1
        </div>
        <p>Selecione um Profissional</p>
      </div>

      <span className={`${style.bar} ${currentPage === 'service' ? style.orangeColor : ''}`}></span>

      <div className={style.divStatusService}>
        <div className={`${style.divColor} ${currentPage === 'service' ? style.orangeColor : ''}`}>
          2
        </div>
        <p>Selecione um Serviço</p>
      </div>
    </div>
  );
}
