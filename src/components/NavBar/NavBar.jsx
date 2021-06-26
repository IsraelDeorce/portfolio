import { useDispatch } from 'react-redux'
import { MdMenu } from 'react-icons/md'

import TitledLogo from '../TitledLogo/TitledLogo'
import PortfolioLinks from '../PortfolioLinks/PortfolioLinks'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

import * as S from './styles'

function NavBar() {
  const dispatch = useDispatch()

  const openSideBar = () => dispatch.session.update({ isSideBarOpen: true })

  return (
    <S.NavBar>
      <S.Hamburguer onClick={openSideBar}>
        <MdMenu size='32' />
      </S.Hamburguer>
      <TitledLogo/>
      <S.Menu>
        <PortfolioLinks />
        <ThemeToggle />
        <LanguageSelector />
      </S.Menu>
    </S.NavBar>
  )
}

export default NavBar
