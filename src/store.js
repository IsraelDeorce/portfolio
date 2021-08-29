import persistPlugin from '@rematch/persist'
import { init } from '@rematch/core'
import storage from 'redux-persist/lib/storage'
import session from './models/session'

const persistConfig = {
  key: 'root',
  storage,
}

const store = init({
  models: {
    session
  },
  plugins: [
    persistPlugin(persistConfig)
  ]
})

export default store
