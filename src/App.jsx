import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Themes from './utils/themes'
import { NavBar } from './components'
import { Home, Error } from './pages'

import './App.scss'

function App() {
  const { theme } = useSelector((state) => state.session)
  console.log(theme)
  return (
    <ThemeProvider theme={Themes[theme]}>
      <div id='app'>
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
