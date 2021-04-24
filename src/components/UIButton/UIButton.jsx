import PropTypes from 'prop-types'
import './UIButton.scss'

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  lefticon: PropTypes.object,
  righticon: PropTypes.object
}
const defaultProps = {
  className: '',
  label: '',
  onClick: () => alert('I do nothing!'),
  lefticon: null,
  righticon: null
}

function UIButton (props) {
  const { className, label, onClick, lefticon, righticon } = props
  return (
    <button className={`ui-button ${className}`} onClick={onClick}>
      {lefticon}
      <span className='ui-button-label'>{label}</span>
      {righticon}
    </button>
  )
}

UIButton.propTypes = propTypes
UIButton.defaultProps = defaultProps

export default UIButton