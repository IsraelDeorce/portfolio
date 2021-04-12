import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Spinner } from './components'
import './i18n'
import store from './store'
import App from './App'
import './index.scss'

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <Router>
        <App />
      </Router >
    </Provider>
  </Suspense>,
  document.getElementById('root')
)
