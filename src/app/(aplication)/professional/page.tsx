import style from '../page.module.css'
import StudioHeader from '../../components/StudioHeader'
import ProgressStatus from '../../components/ProgressStatus'
import Header from '@/app/components/Header'
import CardContent from '@/app/components/CardContent'

export default function page() {

  return (
    <main className={style.professionalPage}>
      <Header>
        <StudioHeader />
        <ProgressStatus />
      </Header>

      <div className={style.professionalContent}>
        <CardContent />
      </div>
    </main>
  )
}
