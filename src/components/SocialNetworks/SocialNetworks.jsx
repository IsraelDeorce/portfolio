import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { LINKS } from '../../utils/constants'
import * as S from './styles'

function SocialNetworks () {
  const redirect = (url) => {
    window.open(url, '_blank')
  }

  return (
    <S.SocialNetworks>
      <FaWhatsapp size='46' onClick={() => { redirect(LINKS.WHATSAPP) }} />
      <FaGithub size='46' onClick={() => { redirect(LINKS.GITHUB) }} />
      <FaLinkedin size='46' onClick={() => { redirect(LINKS.LINKEDIN) }} />
      <FaEnvelope size='46' onClick={() => { redirect(TEXT.EMAIL) }} />
    </S.SocialNetworks>
  )
}

export default SocialNetworks
