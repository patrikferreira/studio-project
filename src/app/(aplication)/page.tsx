"use client"
import { useRouter } from 'next/navigation'
import style from './page.module.css'
import RouteButton from '../components/RouteButton';
import Image from 'next/image'
import perfil from '../../../public/Assets/ficticia-perfil.png'
import line from '../../../public/Assets/Line1.png'
import scissor from '../../../public/Assets/pngwing3.png'
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <main className={style.homePage}>
      <Header>
        <p className={style.studioTitle}>Espaço</p>
        <div className={style.imgContent}>
          <Image
            src={perfil}
            alt="foto de perfil do profissional"
            width={300}
          />
        </div>
        <p className={style.studioName}>Mária Lima</p>
        <div>
          <div className={style.studioIcons}>
            <Image
              src={line}
              alt='Imagem de linha pontilhada'
            />
              <Image
                
                src={scissor}
                alt='imagem de tesoura'
              />
          </div>
          <h2>O seu Espaço de beleza e bem-estar, onde você pode ser você mesmo</h2>
        </div>
      </Header>

      <div className={style.homeContent}>
        <div className={style.homeButtonsDiv}>
          <Link href={'/professional'}>
            <RouteButton icon={'fa-solid fa-calendar-days'} description='Novo Agendamento' />
          </Link>
          <Link href={'/service'}>
            <RouteButton icon={'fa-solid fa-file-pen'} description='Serviços' />
          </Link>
          <Link href={'/address'}>
            <RouteButton icon={'fa-solid fa-location-dot'} description='Endereço' />
          </Link>
        </div>
      </div>

    </main>
  )
}
