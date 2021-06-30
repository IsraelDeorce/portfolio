import { useTranslation } from 'react-i18next'
import { FaGoogleDrive } from 'react-icons/fa'
import { UIButton } from '../'
import { LINKS } from '../../utils/constants'
import * as S from './styles'

function ExternalButtons() {
  const { t } = useTranslation()

  return (
    <S.ExternalButtons>
      <UIButton id='blog-button' label={t('button.visit_my_blog')} />
      <UIButton
          id='resume-button'
          onClick={() => window.open(LINKS.GDRIVE, '_blank')}
          secondary
          label={t('button.resume')}
          righticon={<FaGoogleDrive />}
        />
    </S.ExternalButtons>
  )
}

export default ExternalButtons
