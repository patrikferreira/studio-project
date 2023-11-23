import React from 'react'
import style from '../(aplication)/page.module.css'
import { Butcherman } from 'next/font/google'

type Props = {
    action: () => void,
    title: string,
    icon: string
}

export default function ConfirmButton({ action, title, icon}: Props) {
    return (
        <button onClick={action}>
            {title} <i className={icon}></i>
        </button>
    )
}