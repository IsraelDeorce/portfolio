import Contact from './Contact'

describe('<Contact/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Contact />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Contact />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Contact />)).toMatchSnapshot()
    })
  })
})
