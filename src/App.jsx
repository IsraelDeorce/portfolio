import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Portfolio, Error } from './pages'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <ThemeProvider theme={Themes[theme]}>
      <S.App id='app'>
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/error' component={Error} />
          <Route path='*' component={Error} />
        </Switch>
      </S.App>
    </ThemeProvider>
  )
}

export default App
