import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Contact from './Contact/Contact'
import * as S from './styles'

function Portfolio() {
  return (
    <S.Portfolio>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </S.Portfolio>
  )
}

export default Portfolio
