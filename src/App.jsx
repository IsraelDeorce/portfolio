import { useSelector } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './i18n'
import { Portfolio, Error } from './pages'
import { Navbar, Article } from './components'
import BigO from './assets/markdown/BigO.md'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <Router basename='/' >
      <ThemeProvider theme={Themes[theme]}>
        <S.App id='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='blog' element={<Article md={BigO} />} />
            <Route path='blog/big-o' element={<Article md={BigO} />} />
            <Route path='blog/data-structures' element={<p>UNDER CONSTRUCTION!</p>} />
            <Route path='*' element={<Error />} />
          </Routes>
        </S.App>
      </ThemeProvider>
    </Router >
  )
}

export default App
