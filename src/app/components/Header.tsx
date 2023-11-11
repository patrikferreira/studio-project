"use client"
import React, { use, useState } from 'react'
import style from '../page.module.css'
import ContentStudio from './ContentStudio'
import Progress from './progress/Progress'

export default function Header() {
    return (
        <div className={style.header}>
            <ContentStudio name='Studio Aila'/>
            <Progress />
        </div>
    )
}
