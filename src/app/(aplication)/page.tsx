"use client"
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import RouteButton from '../components/RouteButton';
import Image from 'next/image'
import perfil from '../../../public/Assets/ficticia-perfil.png'
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <main className={style.main}>
        <Header element1={<div className={style.imgContentStudio}>
            <Image
              src={perfil}
              alt="foto de perfil do profissional"
            />
          </div>} element2={null}/>

        <div className={style.content}>
          <div className={style.buttons}>
            <Link href={'/professional'}>
              <RouteButton icon={'fa-solid fa-calendar-days'} description='Novo Agendamento' />
            </Link>
            <Link href={'/service'}>
              <RouteButton icon={'fa-solid fa-file-pen'} description='Serviços'/>
            </Link>
            <Link href={'/address'}>
              <RouteButton icon={'fa-solid fa-location-dot'} description='Endereço'/>
            </Link>
          </div>
        </div>

    </main>
  )
}
