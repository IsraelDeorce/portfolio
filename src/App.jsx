import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
// import { Switch, Route } from 'react-router-dom'
import { NavBar, SideBar } from './components'
import { Portfolio } from './pages'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <ThemeProvider theme={Themes[theme]}>
      <S.App id='app'>
        <NavBar />
        <SideBar />
        <Portfolio />
          {/* <Switch>
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='*' component={Error} />
          </Switch> */}
      </S.App>
    </ThemeProvider>
  )
}

export default App
