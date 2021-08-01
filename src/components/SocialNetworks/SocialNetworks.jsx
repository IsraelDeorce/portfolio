import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { LINKS, TEXT } from '../../utils/constants'
import * as S from './styles'

function SocialNetworks() {  
  return (
    <S.SocialNetworks>
      <a title={LINKS.WHATSAPP} href={LINKS.WHATSAPP} target='_blank'>
        <FaWhatsapp size='46' />
      </a>
      <a title={LINKS.GITHUB} href={LINKS.GITHUB} target='_blank'>
        <FaGithub size='46' />
      </a>
      <a title={LINKS.LINKEDIN} href={LINKS.LINKEDIN} target='_blank'>
        <FaLinkedin size='46' />
      </a>
      <a title={TEXT.EMAIL} href={`mailto: ${TEXT.EMAIL}`} target='_blank'>
        <FaEnvelope size='46' />
      </a>
    </S.SocialNetworks>
  )
}

export default SocialNetworks
