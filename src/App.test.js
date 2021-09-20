import App from './App'

describe('<App/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<App />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<App />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<App />)).toMatchSnapshot()
    })
  })
})
