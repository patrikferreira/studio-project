import React from 'react'
import style from '../(aplication)/page.module.css'

type Props = {
    action: () => void,
    title: string,
    icon: string
    disabled: boolean
}

function styleDisabledButton(disabled: boolean) {
    return disabled ? style.buttonDisabled : ''
  }

export default function ConfirmButton({ action, title, icon, disabled, }: Props) {
    return (
        <button disabled={disabled} onClick={action} className={styleDisabledButton(disabled)}>
            {title} <i className={icon}></i>
        </button>
    )
}