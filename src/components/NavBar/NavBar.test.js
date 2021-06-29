import NavBar from './NavBar'

describe('<NavBar/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<NavBar />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<NavBar />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<NavBar />)).toMatchSnapshot()
    })
  })
})
