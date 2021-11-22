import { useDispatch } from 'react-redux'
import { MdMenu } from 'react-icons/md'
import {
  TitledLogo,
  PortfolioLinks,
  ThemeToggle,
  LanguageSelector
} from '../../'
import * as S from './styles'

function PortfolioHeader() {
  const dispatch = useDispatch()

  const openPortfolioSidebar = () => dispatch.session.update({ isPortfolioSidebarOpen: true })

  return (
    <S.PortfolioHeader>
      <S.Hamburguer onClick={openPortfolioSidebar}>
        <MdMenu size='32' />
      </S.Hamburguer>
      <TitledLogo/>
      <S.Menu>
        <PortfolioLinks />
        <ThemeToggle />
        <LanguageSelector />
      </S.Menu>
    </S.PortfolioHeader>
  )
}

export default PortfolioHeader
