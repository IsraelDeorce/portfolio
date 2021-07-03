const mock = jest.createMockFromModule('react-redux')

const dispatch = jest.fn((obj) => obj)
dispatch.session = {
  update: jest.fn(),
  changeLanguage: jest.fn(),
  switchTheme: jest.fn()
}
const selectors = {
  session: {
    language: 'en',
    theme: 'dark',
    isSideBarOpen: false
  }
}

mock.useDispatch = jest.fn(() => dispatch)
mock.useSelector = jest.fn((fn) => fn(selectors))

module.exports = mock
