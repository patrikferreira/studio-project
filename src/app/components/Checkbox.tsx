import style from '../(aplication)/page.module.css'

type Props = {
    checked?: boolean;
}

export default function Checkbox({checked}: Props) {
    return (
        <input className={style.inutCheckbox} type="checkbox" checked={checked}/>
    )
}