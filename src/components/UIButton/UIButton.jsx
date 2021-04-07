import './UIButton.scss'

function UIButton (props) {
  const {
    className = '',
    label = '',
    onClick = () => alert('I do nothing!'),
    lefticon,
    righticon
  } = props
  return (
    <button className={`ui-button ${className}`} onClick={onClick}>
      {lefticon}
      <span className='ui-button-label'>{label}</span>
      {righticon}
    </button>
  )
}

export default UIButton