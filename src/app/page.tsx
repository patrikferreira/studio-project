"use client"
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import RouteButton from './components/RouteButton';
import Footer from './components/Footer';
import Image from 'next/image'
import perfil from '../../public/Assets/ficticia-perfil.png'

export default function Home() {
  const router = useRouter();

  return (
    <main className={style.main}>
        <header className={style.header}>
          <div className={style.imgContentStudio}>
            <Image
              src={perfil}
              alt="foto de perfil do profissional"
            />
          </div>
        </header>

        <div className={style.content}>
          <div className={style.buttons}>
            <RouteButton icon={'fa-solid fa-calendar-days'} description='Novo Agendamento' action={() => {
              router.push('/professional')
            }}/>
            <RouteButton icon={'fa-solid fa-file-pen'} description='Serviços' action={() => {
              router.push('/service')
            }}/>
          </div>
        </div>
        <Footer />

    </main>
  )
}
