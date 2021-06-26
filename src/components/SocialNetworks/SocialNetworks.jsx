import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

import * as S from './styles'

function SocialNetworks () {
  return (
    <S.SocialNetworks>
      <FaWhatsapp size='32'/>
      <FaGithub size='32' />
      <FaLinkedin size='32' />
      <FaEnvelope size='32' />
    </S.SocialNetworks>
  )
}

export default SocialNetworks
