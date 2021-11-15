import { useNavigate } from 'react-router-dom'
import { UIButton } from '../../components'
import { FcClock } from 'react-icons/fc'
import * as S from './styles'

function Blog() {
  const navigate = useNavigate()

  return (
    <S.Blog>
      <h1>COMING SOON...</h1>
      <UIButton label='Go Back' onClick={() => navigate(-1)} />
      <FcClock size='46'/>
    </S.Blog>
  )
}

export default Blog
