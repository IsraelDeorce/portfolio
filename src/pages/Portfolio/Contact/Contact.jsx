import { useTranslation } from 'react-i18next'
import { SocialNetworks, Copyright } from '../../../components'
import { TEXT } from '../../../utils/constants'
import * as S from './styles'

function Contact() {
  const { t } = useTranslation()

  return (
    <footer id='contact'>
      <S.Body>
        <SocialNetworks />
        <S.TextualContacts>
          <p>{TEXT.EMAIL}</p>
          <p>{TEXT.PHONE}</p>
          <p>{`${TEXT.PORTO} - ${t('br')}`}</p>
        </S.TextualContacts>
      </S.Body>
      <Copyright />
    </footer>
  )
}

export default Contact
