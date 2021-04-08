import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { NavBar } from './components'
import { Home, Error } from './pages'

import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id='app'>
          <NavBar />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='*' component={Error} />
            </Switch>
          </div>
        </div>
      </Router >
    </Provider>
  )
}

export default App
