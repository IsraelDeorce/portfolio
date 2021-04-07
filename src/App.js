import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Home, Error } from './pages';

import './App.scss';

function App() {
  return (
    <Router>
      <div id='app' className='App'>
        <NavBar />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
      </div>
    </Router >
  );
}

export default App;
