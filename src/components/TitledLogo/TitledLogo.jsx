import { GiDirewolf } from 'react-icons/gi'
import PropTypes from 'prop-types'
import { TEXT } from '../../utils/constants'
import * as S from './styles'

const propTypes = {
  onClick: PropTypes.func
}

function TitledLogo({ onClick }) {
  return (
    <S.TitledLogo onClick={onClick}>
      {<GiDirewolf size='32' />}
      <strong>{TEXT.MYNAME}</strong>
    </S.TitledLogo>
  )
}

TitledLogo.propTypes = propTypes

export default TitledLogo
