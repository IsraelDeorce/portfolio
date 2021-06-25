import PropTypes from 'prop-types'
import * as S from './styles'

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  lefticon: PropTypes.object,
  righticon: PropTypes.object
}

function UIButton(props) {
  const {
    label = '',
    onClick = () => alert('I do nothing!'),
    lefticon = null,
    righticon = null,
    secondary = false
  } = props

  return (
    <S.UIButton onClick={onClick} secondary={secondary}>
      {lefticon}
      <S.Label>{label}</S.Label>
      {righticon}
    </S.UIButton>
  )
}

UIButton.propTypes = propTypes

export default UIButton
