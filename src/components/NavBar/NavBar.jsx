import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdMenu } from 'react-icons/md'

import Menu from './Menu/Menu'
import TitledLogo from './TitledLogo/TitledLogo'
import { useWindowSize } from '../../utils/hooks'

import * as S from './styles'

function NavBar() {
  const { isMenuOpen } = useSelector((state) => state.session)
  const dispatch = useDispatch()
  const [_height, width] = useWindowSize()

  useEffect(() => {
    if (isMenuOpen && width >= 992) dispatch.session.update({ isMenuOpen: false })
  }, [isMenuOpen, width])

  return (
    <S.NavBar>
      <S.Hamburguer onClick={() => dispatch.session.update({ isMenuOpen: true })}>
        <MdMenu size='32' />
      </S.Hamburguer>
      <TitledLogo/>
      <Menu />
    </S.NavBar>
  )
}

export default NavBar
