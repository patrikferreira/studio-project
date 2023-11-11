import React from 'react'
import style from '../../page.module.css'
import Step from '../progress/Step'
import Bar from '../progress/Bar'

export default function Progress() {
  return (
    <div className={style.progress}>
      <Step stepHeader='1' stepDescription='Selecione um Profissional' bgColor='#fff'/>
      <Bar bg='#fff'/>
      <Step stepHeader='2' stepDescription='Selecione os serviços' bgColor='#fff'/>
    </div>
  )
}
