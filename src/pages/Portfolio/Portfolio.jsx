import { useTranslation } from 'react-i18next'
import { ExternalButtons } from '../../components'
import { TEXT } from '../../utils/constants'
import * as S from './styles'

function Portfolio() {
  const { t } = useTranslation()

  return (
    <S.Portfolio id='portfolio'>
      <h1>{TEXT.MYNAME}</h1>
      <S.Subtitle className='subtitle'>{t('subtitle')}</S.Subtitle>
      <ExternalButtons/>
    </S.Portfolio>
  )
}

export default Portfolio
