import SocialNetworks from './SocialNetworks'

describe('<SocialNetworks/>', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<SocialNetworks />)).toMatchSnapshot()
    })
  })
})
