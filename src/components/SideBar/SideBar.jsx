import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'react-toggle/style.css'

import { useWindowSize } from '../../utils/hooks'
import PortfolioLinks from '../PortfolioLinks/PortfolioLinks'
import TitledLogo from '../TitledLogo/TitledLogo'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import ExternalButtons from '../ExternalButtons/ExternalButtons'
import SocialNetworks from '../SocialNetworks/SocialNetworks'

import * as S from './styles'

function SideBar() {
  const { isSideBarOpen } = useSelector((state) => state.session)
  const [_height, width] = useWindowSize()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSideBarOpen) {
      document.body.style.overflow = 'hidden'
      if (width >= 992) dispatch.session.update({ isSideBarOpen: false })
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isSideBarOpen, width])

  const closeSideBar = () => { dispatch.session.update({ isSideBarOpen: false }) }

  if (!isSideBarOpen) return null

  return (
    <>
      <S.Background onClick={closeSideBar} />
      <S.SideBar>
        <S.Header>
          <TitledLogo onClick={closeSideBar} />
          <S.Preferences>
            <ThemeToggle />
            <LanguageSelector />
          </S.Preferences>
        </S.Header>
        <PortfolioLinks orientation='vertical' onClick={closeSideBar} />
        <ExternalButtons/>
        <SocialNetworks/>
      </S.SideBar>
    </>
  )
}

export default SideBar
