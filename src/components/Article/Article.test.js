import Article from './Article'

describe('<Article/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Article />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Article />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Article />)).toMatchSnapshot()
    })
  })
})