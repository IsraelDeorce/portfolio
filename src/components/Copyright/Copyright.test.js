import Copyright from './Copyright'

describe('<Copyright/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Copyright />)).toMatchSnapshot()
    })
  })
})
