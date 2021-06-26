import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-toggle/style.css'

import PortfolioLinks from '../PortfolioLinks/PortfolioLinks'
import TitledLogo from '../TitledLogo/TitledLogo'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

import * as S from './styles'

function SideBar({ isSideBarOpen }) {
  if (!isSideBarOpen) return null

  const dispatch = useDispatch()
  const closeMenu = () => { dispatch.session.update({ isSideBarOpen: false }) }  

  return (
    <>
      <S.Background onClick={closeMenu} />
      <S.SideBar>
        <S.Header>
          <TitledLogo onClick={closeMenu} />
          <S.Preferences>
            <ThemeToggle />
            <LanguageSelector />
          </S.Preferences>
        </S.Header>
        <PortfolioLinks onCLick={closeMenu} orientation='vertical' />
      </S.SideBar>
    </>
  )
}

export default SideBar
