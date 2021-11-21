import Contact from './Contact'

describe('<Contact/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Contact />)).toMatchSnapshot()
    })
  })
})
