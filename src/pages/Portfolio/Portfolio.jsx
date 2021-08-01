import Home from './Home/Home'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import * as S from './styles'

function Portfolio() {
  return (
    <S.Portfolio>
      <Home/>
      <Skills/>
      <Experience/>
      <Contact/>
    </S.Portfolio>
  )
}

export default Portfolio
