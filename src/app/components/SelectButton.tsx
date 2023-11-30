import style from '../(aplication)/page.module.css'

type Props = {
    checked?: boolean;
}

export default function SelectButton({checked}: Props) {
    return (
        <input className={style.selectButton} style={{accentColor: "#BC85FC"}} type="radio" checked={checked}/>
    )
}