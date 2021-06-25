import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaMoon, FaSun } from 'react-icons/fa'
import Flags from 'country-flag-icons/react/3x2'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import MenuLinks from '../MenuLinks/MenuLinks'
import TitledLogo from '../TitledLogo/TitledLogo'
import { formatLanguage } from '../../../utils'

import * as S from './styles'
import './Menu.scss'

function Menu() {
  const { language, isMenuOpen } = useSelector((state) => state.session)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(null)
  const [languageCode, setLanguage] = useState('')

  useEffect(() => {
    const formatedLanguage = formatLanguage(language)
    setLanguage(formatedLanguage)
    formatedLanguage === 'en'
      ? setFlag(<Flags.CA title='Canada' className='flag' />)
      : setFlag(<Flags.BR title='Brasil' className='flag' />)
  }, [language])

  const handleChangeLanguage = () => {
    dispatch.session.changeLanguage({
      languageCode: languageCode === 'en' ? 'pt' : 'en'
    })
  }

  const closeMenu = () => { dispatch.session.update({ isMenuOpen: false }) }

  return (
    <>
      {isMenuOpen && <S.Background onClick={closeMenu} />}
      <S.Menu isMenuOpen={isMenuOpen}>
        <MenuLinks isMenuOpen={isMenuOpen} />
        <S.UserPreferences isMenuOpen={isMenuOpen}>
          {isMenuOpen && <TitledLogo onClick={closeMenu} />}
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
              {languageCode}
              {<MdKeyboardArrowDown />}
            </S.LanguageCode>
            {flag}
          </S.LanguageSelector>
        </S.UserPreferences>
      </S.Menu>
    </>
  )
}

export default Menu