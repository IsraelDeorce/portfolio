import ArticleLinks from './ArticleLinks'

describe('<ArticleLinks/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<ArticleLinks />)).toMatchSnapshot()
    })
  })
})