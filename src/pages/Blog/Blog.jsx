import { useNavigate } from 'react-router-dom'
import { Article, UIButton } from '../../components'
import BigO from '../../assets/markdown/BigO.md'
import * as S from './styles'

function Blog() {
  const navigate = useNavigate()

  return (
    <S.Blog>
      <h1>COMING SOON...</h1>
      <UIButton label='Go Back' onClick={() => navigate(-1)} />
      <Article md={BigO} />
    </S.Blog>
  )
}

export default Blog
