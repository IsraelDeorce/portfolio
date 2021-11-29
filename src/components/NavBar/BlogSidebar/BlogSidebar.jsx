import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import 'react-toggle/style.css'
import { useWindowSize } from '../../../utils/hooks'
import { TitledLogo, ThemeToggle, LanguageSelector, ArticleLinks, UIButton } from '../../'
import * as S from './styles'

function BlogSidebar() {
  const { isBlogSidebarOpen } = useSelector((state) => state.session)
  const [_height, width] = useWindowSize()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isBlogSidebarOpen) {
      document.body.style.overflow = 'hidden'
      if (width >= 992) dispatch.session.update({ isBlogSidebarOpen: false })
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isBlogSidebarOpen, width])

  const closeBlogSidebar = () => { dispatch.session.update({ isBlogSidebarOpen: false }) }

  if (!isBlogSidebarOpen && width < 992) return null
  
  return (
    <>
      <S.Background onClick={closeBlogSidebar} />
      <S.BlogSidebar>
        <S.Header>
          <Link to='/'>
            <TitledLogo />
          </Link>
          <S.Preferences>
            <ThemeToggle />
            <LanguageSelector />
          </S.Preferences>
        </S.Header>
        <ArticleLinks onClick={closeBlogSidebar} />
      </S.BlogSidebar>
    </>
  )
}

export default BlogSidebar
