import { useTranslation } from 'react-i18next'
import { FaGoogleDrive } from 'react-icons/fa'
import { UIButton } from '../'

import * as S from './styles'

function ExternalButtons() {
  const { t } = useTranslation()

  return (
    <S.ExternalButtons>
      <UIButton label={t('button.visit_my_blog')} />
      <UIButton
          onClick={() => window.open('https://docs.google.com/document/d/1gwsxihd7lOVGqM2HzhD2VqOYW85ExDR7hLntG_dOQyg/edit?usp=sharing', '_blank')}
          secondary
          label={t('button.resume')}
          righticon={<FaGoogleDrive />}
        />
    </S.ExternalButtons>
  )
}

export default ExternalButtons
