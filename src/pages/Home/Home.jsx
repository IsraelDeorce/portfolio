import { BlogButton, UIButton } from '../../components'
import { FaGoogleDrive } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './Home.scss'

function Home() {
  const { t } = useTranslation()
  
  return (
    <section className='home' style={{
      backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(/Vancouver.jpg)'
    }}>
      <h1>Israel Deorce</h1>
      <p className='subtitle'>{t('subtitle')}</p>
      <div className='home-buttons'>
        <BlogButton />
        <UIButton
          onClick={() => window.open('https://docs.google.com/document/d/1gwsxihd7lOVGqM2HzhD2VqOYW85ExDR7hLntG_dOQyg/edit?usp=sharing', '_blank')}
          className='secondary'
          label={t('button.resume')}
          righticon={<FaGoogleDrive />}
        />
      </div>
    </section>
  )
}

export default Home