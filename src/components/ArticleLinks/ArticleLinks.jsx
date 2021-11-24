import { Link } from 'react-router-dom'
import * as S from './styles'

function ArticleLinks() {
  return (
    <S.ArticleLinks>
      <Link to='/blog/big-o'><p>Big O</p></Link>
      <Link to='/blog/data-structures'><p>Data Structures</p></Link>
    </S.ArticleLinks>
  )
}

export default ArticleLinks
