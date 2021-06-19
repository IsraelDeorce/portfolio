import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdMenu, MdHome, MdKeyboardArrowDown } from 'react-icons/md'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled from 'styled-components'
import Flags from 'country-flag-icons/react/3x2'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import { TEXT } from '../../utils/constants'
import NavItemsList from '../NavItemsList/NavItemsList'

import './NavBar.scss'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.c_menu};
  padding: 0 1.5rem;
  height: 60px;
  color: ${({ theme }) => theme.c_brackets};
  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`
const Hamburguer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (min-width: 992px) {
    display: none;
  }
`
const NavTitle = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.c_brackets};
  &:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`
const NavItemsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`

function NavBar() {
  const { language } = useSelector((state) => state.session)
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(null)

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
    <Nav>
      <Hamburguer>
        <MdMenu size='32' />
      </Hamburguer>
      <NavTitle href='#home'>
        {<MdHome size='32' />}
        <strong>{TEXT.myName}</strong>
      </NavTitle>
      <NavItemsContainer>
        <NavItemsList direction='row' />
        <Toggle
          onChange={dispatch.session.switchTheme}
          className='toggle'
          icons={{
            checked: <FaMoon />,
            unchecked: <FaSun />,
          }}
        />
        <div className='d-flex-center pointer' onClick={handleChangeLanguage}>
          <div className='d-flex-column-center'>
            {language}
            {<MdKeyboardArrowDown />}
          </div>
          {flag}
        </div>
      </NavItemsContainer>
    </Nav>
  )
}

export default NavBar