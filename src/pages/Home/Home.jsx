import { BlogButton, UIButton } from '../../components'
import { FaGoogleDrive } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import { TEXT } from '../../utils/constants'

import './Home.scss'

const Placeholder = styled.section`
  scroll-behavior: smooth;
  min-height: 400px;
  border-bottom: 4px solid black;
`
const Placeholder1 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_importExport};`
const Placeholder2 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_string};`
const Placeholder3 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_varDeclaration};`
const Placeholder4 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_number};`
const Placeholder5 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_varType};`

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
      <Placeholder1 id='sec1' />
      <Placeholder2 id='sec2' />
      <Placeholder3 id='sec3' />
      <Placeholder4 id='sec4' />
      <Placeholder5 id='sec5' />
    </>
  )
}

export default Home