import React from 'react'
import style from '../../page.module.css'

type Props = {
    stepHeader: string,
    stepDescription: string,
    bgColor: string
}
export default function Step({stepHeader, stepDescription, bgColor}: Props) {
  return (
    <div className={style.step}>
      <div className={style.stepHeader} style={{background: bgColor}}>
        {stepHeader}
      </div>
      <div className={style.stepDescription}>
        {stepDescription}
      </div>
    </div>
  )
}
