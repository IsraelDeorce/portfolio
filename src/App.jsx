import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { NavBar, SideBar } from './components'
import { Home, Error } from './pages'
import Themes from './utils/themes'
import { useWindowSize } from './utils/hooks'

import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)
  const { isSideBarOpen } = useSelector((state) => state.session)

  const [_height, width] = useWindowSize()
  useEffect(() => {
    if (isSideBarOpen && width >= 992) dispatch.session.update({ isSideBarOpen: false })
  }, [isSideBarOpen, width])

  return (
    <ThemeProvider theme={Themes[theme]}>
      <S.App id='app'>
        <NavBar />
        <SideBar isSideBarOpen={isSideBarOpen} />
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
