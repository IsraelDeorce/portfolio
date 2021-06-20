import { BlogButton, UIButton } from '../../components'
import { FaGoogleDrive } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { TEXT } from '../../utils/constants'

import './Home.scss'

const Placeholder = styled.div`
  scroll-behavior: smooth;
  & > * {
    min-height: 400px;
    background-color: ${({ theme }) => theme.c_importExport};
    border-bottom: 4px solid black;
  }
`

function Home() {
  const { t } = useTranslation()

  return (
    <>
      <section id='home' className='home'>
        <h1>{TEXT.myName}</h1>
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
      <Placeholder>
        <section id='sec1' className='sec' />
        <section id='sec2' className='sec' />
        <section id='sec3' className='sec' />
        <section id='sec4' className='sec' />
      </Placeholder>
    </>
  )
}

export default Home