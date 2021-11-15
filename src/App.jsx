import { useSelector } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './i18n'
import { Portfolio, Error, Blog } from './pages'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <Router basename='/'>
      <ThemeProvider theme={Themes[theme]}>
        <S.App id='app'>
          <Routes>
            <Route exact path='/' element={<Portfolio />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </S.App>
      </ThemeProvider>
    </Router >
  )
}

export default App
