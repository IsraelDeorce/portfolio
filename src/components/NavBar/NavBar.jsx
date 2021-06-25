import { useDispatch } from 'react-redux'
import { MdMenu } from 'react-icons/md'

import Menu from './Menu/Menu'
import TitledLogo from './TitledLogo/TitledLogo'

import * as S from './styles'

function NavBar() {
  const dispatch = useDispatch()

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
