import { Switch, Route } from 'react-router-dom'
import { NavBar } from './components'
import { Home, Error } from './pages'
import './App.scss'

function App() {
  return (
    <div id='app'>
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={Error} />
        </Switch>
      </div>
    </div>
  )
}

export default App
