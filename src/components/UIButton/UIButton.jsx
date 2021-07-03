import PropTypes from 'prop-types'
import * as S from './styles'

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  secondary: PropTypes.bool
}

function UIButton(props) {
  const {
    label = '',
    onClick = () => alert('I do nothing!'),
    leftIcon = null,
    rightIcon = null,
    secondary = false
  } = props

  return (
    <S.UIButton onClick={onClick} secondary={secondary}>
      {leftIcon}
      <span>{label}</span>
      {rightIcon}
    </S.UIButton>
  )
}

UIButton.propTypes = propTypes

export default UIButton
