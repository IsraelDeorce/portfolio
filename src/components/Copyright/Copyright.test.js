import Copyright from './Copyright'

describe('<Copyright/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Copyright />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Copyright />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Copyright />)).toMatchSnapshot()
    })
  })
})
