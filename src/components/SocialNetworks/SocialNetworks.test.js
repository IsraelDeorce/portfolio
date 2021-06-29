import SocialNetworks from './SocialNetworks'

describe('<SocialNetworks/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<SocialNetworks />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<SocialNetworks />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<SocialNetworks />)).toMatchSnapshot()
    })
  })
})
