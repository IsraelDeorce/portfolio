import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import * as S from './styles'

function ArticleLinks() {
  const { t } = useTranslation()

  return (
    <S.ArticleLinks>
      <Link to='/blog/time-complexity'>{t('articles.time_complexity')}</Link>
      <Link to='/blog/software-engineering'>{t('skills.software_engineering')}</Link>
      <Link to='/blog/data-structures'>{t('articles.data_structures')}</Link>
      <Link to='/blog/algorithms'>{t('articles.algorithms')}</Link>
    </S.ArticleLinks>
  )
}

export default ArticleLinks
