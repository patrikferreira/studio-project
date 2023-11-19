import React from 'react'
import style from '../(aplication)/page.module.css'
import { Butcherman } from 'next/font/google'

type Props = {
    message: string,
}

export default function ConfirmButton({message}: Props) {
    return (
        <button onClick={() => {
            window.open(`https://whatsa.me/5585998473291/?t=${message}`)
        }}>
            CONFIRMAR <i className="fa-brands fa-whatsapp"></i>
        </button>
    )
}