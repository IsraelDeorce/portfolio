import i18n from '../i18n'

const session = {
  state: {
    language: 'en'
  },
  reducers: {
    update (state, payload) {
      return { ...state, ...payload}
    },
  },
  effects: dispatch => ({
    changeLanguage({ language }, _rootState) {
      dispatch.session.update({ language })
      i18n.changeLanguage(language)
    }
  })
}

export default session