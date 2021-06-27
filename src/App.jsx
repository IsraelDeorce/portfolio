import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { NavBar, SideBar } from './components'
import { Home, Error } from './pages'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme, isSideBarOpen } = useSelector((state) => state.session)

  return (
    <ThemeProvider theme={Themes[theme]}>
      <S.App id='app' isSideBarOpen={isSideBarOpen}>
        <NavBar />
        <SideBar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
      </S.App>
    </ThemeProvider>
  )
}

export default App
