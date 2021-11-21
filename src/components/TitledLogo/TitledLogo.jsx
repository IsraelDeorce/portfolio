import { GiDirewolf } from 'react-icons/gi'
import PropTypes from 'prop-types'
import { TEXT } from '../../utils/constants'
import { HashLink } from 'react-router-hash-link'
import * as S from './styles'

const propTypes = {
  onClick: PropTypes.func
}

function TitledLogo({ onClick }) {
  return (
    <HashLink onClick={onClick} to='#home'>
      <S.TitledLogo>
        {<GiDirewolf size='32' />}
        <strong>{TEXT.MYNAME}</strong>
      </S.TitledLogo>
    </HashLink >
  )
}

TitledLogo.propTypes = propTypes

export default TitledLogo
