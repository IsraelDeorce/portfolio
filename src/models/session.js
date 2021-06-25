import i18n from '../i18n'

const session = {
  state: {
    language: i18n.language,
    theme: 'dark',
    isMenuOpen: false
  },
  reducers: {
    update (state, payload) {
      return { ...state, ...payload }
    }
  },
  effects: (dispatch) => ({
    changeLanguage ({ language }) {
      dispatch.session.update({ language })
      i18n.changeLanguage(language)
    },
    switchTheme (_, rootState) {
      rootState.session.theme === 'dark'
        ? dispatch.session.update({ theme: 'light' })
        : dispatch.session.update({ theme: 'dark' })
    }
  })
}

export default session