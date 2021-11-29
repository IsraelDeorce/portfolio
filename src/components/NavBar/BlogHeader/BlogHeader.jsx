import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import { TitledLogo } from '../../'
import * as S from './styles'

function BlogHeader() {
  const dispatch = useDispatch()

  const openBlogSidebar = () => dispatch.session.update({ isBlogSidebarOpen: true })

  return (
    <S.BlogHeader>
      <S.Hamburguer onClick={openBlogSidebar}>
        <MdMenu size='32' />
      </S.Hamburguer>
      <Link to='/'>
        <TitledLogo />
      </Link>
    </S.BlogHeader>
  )
}

export default BlogHeader
