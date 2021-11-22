import { useSelector } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './i18n'
import { Portfolio, Error, Blog } from './pages'
import { Navbar } from './components'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <Router basename='/' hashType='noslash'>
      <ThemeProvider theme={Themes[theme]}>
        <S.App id='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/big-o' element={<div />} />
            <Route path='blog/data-structures' element={<div />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </S.App>
      </ThemeProvider>
    </Router >
  )
}

export default App
