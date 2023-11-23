import React from 'react'
import style from '../(aplication)/page.module.css'
import { Butcherman } from 'next/font/google'

type Props = {
    message: string,
    action: () => void,
    title: string,
    icon: string
}

export default function ConfirmButton({message, action, title, icon}: Props) {
    return (
        <button onClick={action}>
            {title} <i className={icon}></i>
        </button>
    )
}