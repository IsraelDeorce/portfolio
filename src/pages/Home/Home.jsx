import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import ExternalButtons from '../../components/ExternalButtons/ExternalButtons'
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
        <h1>{TEXT.MYNAME}</h1>
        <p className='subtitle'>{t('subtitle')}</p>
        <ExternalButtons/>
      </section>
      <Placeholder1 id='sec1'><h1>TESTEEEEEEEEEEEE</h1></Placeholder1>
      <Placeholder2 id='sec2'><h1>TESTEEEEEEEEEEEE</h1></Placeholder2>
      <Placeholder3 id='sec3'><h1>TESTEEEEEEEEEEEE</h1></Placeholder3>
      <Placeholder4 id='sec4'><h1>TESTEEEEEEEEEEEE</h1></Placeholder4>
      <Placeholder5 id='sec5'><h1>TESTEEEEEEEEEEEE</h1></Placeholder5>
    </>
  )
}

export default Home