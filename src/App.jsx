import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './i18n'
import { Portfolio, Error } from './pages'
import { TimeComplexity, SoftwareEngineering, DataStructures, Algorithms } from './pages/Blog'
import { Navbar } from './components'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <ThemeProvider theme={Themes[theme]}>
      <S.App id='app'>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<Portfolio />} />
          </Route>
          <Route path='/blog' element={<Navbar isBlogPage />} >
            <Route index element={<TimeComplexity />} />
            <Route path='/blog/time-complexity' element={<TimeComplexity />} />
            <Route path='/blog/software-engineering' element={<SoftwareEngineering />} />
            <Route path='/blog/data-structures' element={<DataStructures />} />
            <Route path='/blog/algorithms' element={<Algorithms />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </S.App>
    </ThemeProvider>
  )
}

export default App
