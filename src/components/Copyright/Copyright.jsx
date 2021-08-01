import { useTranslation } from 'react-i18next'
import { FaRegCopyright } from 'react-icons/fa'
import * as S from './styles'

function Copyright() {
  const { t } = useTranslation()
  return (
    <S.Copyright>
      Copyright&nbsp;
      <FaRegCopyright />
      &nbsp;{t('copyright')}
    </S.Copyright>
  )
}

export default Copyright
