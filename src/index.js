import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router basename='/' >
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'))
