import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaMoon, FaSun } from 'react-icons/fa'
import Flags from 'country-flag-icons/react/3x2'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import MenuLinks from '../MenuLinks/MenuLinks'

import * as S from './styles'
import './Menu.scss'

function Menu({ isOpen, setIsOpen }) {
  const { language } = useSelector((state) => state.session)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(null)

  const node = useRef()
  const handleClick = (e) => {
    if (!node.current.contains(e.target)) setIsOpen(false);;
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  useEffect(() => {
    language === 'en'
      ? setFlag(<Flags.CA title='Canada' className='flag' />)
      : setFlag(<Flags.BR title='Brasil' className='flag' />)
  }, [language])

  const handleChangeLanguage = () => {
    dispatch.session.changeLanguage({
      language: language === 'en' ? 'pt' : 'en'
    })
  }

  return (
    <S.Menu ref={node} isOpen={isOpen} onBlur={() => setIsOpen(false)}>
      <MenuLinks isOpen={isOpen} />
      <S.UserPreferences isOpen={isOpen}>
        <Toggle
          onChange={dispatch.session.switchTheme}
          className='toggle'
          icons={{
            checked: <FaSun />,
            unchecked: <FaMoon />,
          }}
        />
        <S.LanguageSelector onClick={handleChangeLanguage}>
          <S.LanguageCode>
            {language}
            {<MdKeyboardArrowDown />}
          </S.LanguageCode>
          {flag}
        </S.LanguageSelector>
      </S.UserPreferences>

    </S.Menu>
  )
}

export default Menu