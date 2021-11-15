import { useNavigate } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import { UIButton } from '../../components' 
import * as S from './styles'

function Blog() {
  const navigate = useNavigate()

  return (
    <S.Blog>
      <h1>COMING SOON...</h1>
      <UIButton label='Go Back' onClick={() => navigate(-1)} />
      <Markdown>
        # Hello world!
      </Markdown>
    </S.Blog>
  )
}

export default Blog
