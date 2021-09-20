import { Suspense } from 'react'
import { Provider, useSelector } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './i18n'
import store from './store'
import { Spinner } from './components'
import { Portfolio, Error, Blog } from './pages'
import Themes from './utils/themes'
import * as S from './styles'

function App() {
  const { theme } = useSelector((state) => state.session)

  return (
    <Suspense fallback={<Spinner />}>
      <Provider store={store}>
        <Router basename='/'>
          <ThemeProvider theme={Themes[theme]}>
            <S.App id='app'>
              <Switch>
                <Route exact path='/' component={Portfolio} />
                <Route exact path='/blog' component={Blog} />
                <Route path='*' component={Error} />
              </Switch>
            </S.App>
          </ThemeProvider>
        </Router >
      </Provider>
    </Suspense>
  )
}

export default App
