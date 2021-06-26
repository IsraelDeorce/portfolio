import { useDispatch } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import './ThemeToggle.scss'

function ThemeToggle() {
  const dispatch = useDispatch()

  return (
    <Toggle
      onChange={dispatch.session.switchTheme}
      className='toggle'
      icons={{
        checked: <FaSun />,
        unchecked: <FaMoon />
      }}
    />
  )
}

export default ThemeToggle
