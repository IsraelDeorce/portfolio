import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { FaGoogleDrive } from 'react-icons/fa'
import { UIButton } from '../'
import { LINKS } from '../../utils/constants'
import * as S from './styles'

function ExternalButtons() {
  const { t } = useTranslation()
  const history = useHistory()

    const handleClick = () => {
      history.push('blog')
    }

  return (
    <S.ExternalButtons>
      <UIButton id='blog-button' label={t('button.visit_my_blog')} onClick={handleClick} />
      <UIButton
          id='resume-button'
          onClick={() => window.open(LINKS.GDRIVE, '_blank')}
          secondary
          label={t('button.resume')}
          rightIcon={<FaGoogleDrive />}
        />
    </S.ExternalButtons>
  )
}

export default ExternalButtons
