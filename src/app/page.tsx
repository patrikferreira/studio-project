"use client"
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import RouteButton from './components/RouteButton';
import Footer from './components/Footer';

export default function Home() {
  const router = useRouter();

  return (
    <main className={style.main}>
        <header className={style.header}>
          <div className={style.imgContentStudio}>
            <img src="assets/ficticia-perfil.png" alt="" />
          </div>
        </header>

        <div className={style.content}>
          <div className={style.buttons}>
            <RouteButton icon={'fa-solid fa-calendar-days'} description='Novo Agendamento' action={() => {
              router.push('/')
            }}/>
            <RouteButton icon={'fa-solid fa-file-pen'} description='Serviços' action={() => {
              router.push('/')
            }}/>
          </div>
        </div>

        <Footer />
    </main>
  )
}
