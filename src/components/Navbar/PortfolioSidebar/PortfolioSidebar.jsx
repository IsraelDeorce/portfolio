import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link'
import 'react-toggle/style.css'
import { useWindowSize } from '../../../utils/hooks'
import {
  PortfolioLinks,
  TitledLogo,
  ThemeToggle,
  LanguageSelector,
  ExternalButtons,
  SocialNetworks
} from '../../'
import * as S from './styles'

function PortfolioSidebar() {
  const { isPortfolioSidebarOpen } = useSelector((state) => state.session)
  const [_height, width] = useWindowSize()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isPortfolioSidebarOpen) {
      document.body.style.overflow = 'hidden'
      if (width >= 992) dispatch.session.update({ isPortfolioSidebarOpen: false })
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isPortfolioSidebarOpen, width])

  const closePortfolioSidebar = () => { dispatch.session.update({ isPortfolioSidebarOpen: false }) }

  if (!isPortfolioSidebarOpen) return null

  return (
    <>
      <S.Background onClick={closePortfolioSidebar} />
      <S.PortfolioSidebar>
        <S.Header>
          <HashLink to='#home'>
            <TitledLogo onClick={closePortfolioSidebar} />
          </HashLink>
          <S.Preferences>
            <ThemeToggle />
            <LanguageSelector />
          </S.Preferences>
        </S.Header>
        <PortfolioLinks orientation='vertical' onClick={closePortfolioSidebar} />
        <ExternalButtons />
        <SocialNetworks />
      </S.PortfolioSidebar>
    </>
  )
}

export default PortfolioSidebar
