import React from 'react'
import style from '../page.module.css'
import { Butcherman } from 'next/font/google'

type Props = {
    message: string,
}

export default function ConfirmButton({message}: Props) {
    return (
        <button onClick={() => {
            window.open(`https://whatsa.me/5585998473291/?t=${message}`)
        }}>
            whatsapp
        </button>
    )
}