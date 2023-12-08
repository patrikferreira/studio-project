"use client"
import { useRouter } from 'next/navigation'
import style from '../(aplication)/page.module.css'
import { footer } from '../core/constants';

export default function Footer() {
  const router = useRouter();

  function redirectRoute(route: string) {
    router.push(route);
  }

  return (
    <div className={style.footer}>
      <div className={style.footerFloating}>
        {
          footer.ITENS_FOOTER.map((item, i) => {
            return (
              <div key={i} className={style.itemFooter} onClick={() => {
                redirectRoute(item.routePath)
              }}>
                <i className={item.classNameIcon}></i>
                {/* <p>{item.titleItem}</p> */}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
