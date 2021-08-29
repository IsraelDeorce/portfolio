import Blog from './Blog'

describe('<Blog/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Blog />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Blog />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Blog />)).toMatchSnapshot()
    })
  })
})
