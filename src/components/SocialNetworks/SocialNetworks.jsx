import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { LINKS } from '../../utils/constants'
import * as S from './styles'

function SocialNetworks () {
  const redirect = (url) => {
    console.log(url) 
    window.open(url, '_blank')
  }

  return (
    <S.SocialNetworks>
      <FaWhatsapp size='32' onClick={() => { redirect(LINKS.WHATSAPP) }} />
      <FaGithub size='32' onClick={() => { redirect(LINKS.GITHUB) }} />
      <FaLinkedin size='32' onClick={() => { redirect(LINKS.LINKEDIN) }} />
      <FaEnvelope size='32' onClick={() => { redirect(LINKS.EMAIL) }} />
    </S.SocialNetworks>
  )
}

export default SocialNetworks
