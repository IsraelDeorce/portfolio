import About from './About'

describe('<About/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<About />)).toMatchSnapshot()
    })
  })
})
