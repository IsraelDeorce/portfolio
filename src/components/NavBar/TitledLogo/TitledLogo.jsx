import { GiDirewolf } from 'react-icons/gi'
import { TEXT } from '../../../utils/constants'

import * as S from './styles'

function TitledLogo() {
  return (
    <S.Title href='#home'>
      {<GiDirewolf size='32' />}
      <strong>{TEXT.myName}</strong>
    </S.Title>
  )
}

export default TitledLogo
