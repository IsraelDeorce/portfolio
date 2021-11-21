import Article from './Article'

describe('<Article/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Article />)).toMatchSnapshot()
    })
  })
})