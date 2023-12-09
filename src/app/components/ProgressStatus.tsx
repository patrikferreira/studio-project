"use client"
import React, { useContext, useState } from 'react';
import style from '../(aplication)/page.module.css'
import { dataContext } from '../store/DataContext';

type Props = {
  service: boolean | null
}

export default function ProgressStatus({service}: Props) {
  const ctx = useContext(dataContext);
  const progressWidth = ctx.selectedProfessional
    ? service
      ? '100%'
      : '50%'
    : '0%';

  const progressStyle = {
    width: progressWidth,
    background: '#552191'
  };

  
  return (
    <div className={style.progressStatus}>
      <div className={style.progressBar}>
        <div className={style.progress} style={{width: progressStyle.width}}></div>
        <div className={style.check} style={{background: progressStyle.background}}>
          ✓
        </div>
        <div className={style.check} style={ctx.selectedProfessional ? {background: progressStyle.background} : {}}>
          ✓
        </div>
        <div className={style.check} style={service ? {background: progressStyle.background} : {}}>
          ✓
        </div>
      </div>
    </div>
  );
}
