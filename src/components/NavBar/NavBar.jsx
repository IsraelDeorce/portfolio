import { useState } from 'react'
import { MdMenu, MdHome } from 'react-icons/md'

import { TEXT } from '../../utils/constants'
import Menu from './Menu/Menu'

import * as S from './styles'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.NavBar>
      <S.Hamburguer onClick={() => setIsOpen(!isOpen)} >
        <MdMenu size='32' />
      </S.Hamburguer>
      <S.Title href='#home'>
        {<MdHome size='32' />}
        <strong>{TEXT.myName}</strong>
      </S.Title>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </S.NavBar >
  )
}

export default NavBar