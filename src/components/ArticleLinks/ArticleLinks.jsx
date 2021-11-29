import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import * as S from './styles'

function ArticleLinks() {
  const { t } = useTranslation()

  return (
    <S.ArticleLinks>
      <Link to='/blog/big-o'>{t('articles.big_o')}</Link>
      <Link to='/blog/data-structures'>{t('skills.software_engineering')}</Link>
      <Link to='/blog/data-structures'>{t('articles.data_structures')}</Link>
      <Link to='/blog/data-structures'>{t('articles.algorithms')}</Link>
    </S.ArticleLinks>
  )
}

export default ArticleLinks
