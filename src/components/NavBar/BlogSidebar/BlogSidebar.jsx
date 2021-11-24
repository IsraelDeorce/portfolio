import 'react-toggle/style.css'
import {
  TitledLogo,
  ThemeToggle,
  LanguageSelector,
  ExternalButtons,
  SocialNetworks,
  ArticleLinks
} from '../../'
import * as S from './styles'

function BlogSidebar() {
  return (
    <S.PortfolioSidebar>
      <S.Header>
        <TitledLogo />
        <S.Preferences>
          <ThemeToggle />
          <LanguageSelector />
        </S.Preferences>
      </S.Header>
      <ArticleLinks />
      <ExternalButtons />
      <SocialNetworks />
    </S.PortfolioSidebar>
  )
}

export default BlogSidebar
