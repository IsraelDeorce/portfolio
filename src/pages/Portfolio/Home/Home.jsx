import { useTranslation } from 'react-i18next'
import { ExternalButtons } from '../../../components'
import { TEXT } from '../../../utils/constants'
import * as S from './styles'

function Home() {
  const { t } = useTranslation()

  return (
    <S.Home id='home'>
      <S.Title>{TEXT.MYNAME}</S.Title>
      <S.Subtitle className='subtitle'>{t('subtitle')}</S.Subtitle>
      <ExternalButtons />
    </S.Home>
  )
}

export default Home
