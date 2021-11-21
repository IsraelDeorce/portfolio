import Blog from './Blog'

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => ({}))
}))

describe('<Blog/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Blog />)).toMatchSnapshot()
    })
  })
})
