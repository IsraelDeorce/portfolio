import PortfolioLinks from './PortfolioLinks'

describe('<PortfolioLinks/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<PortfolioLinks />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<PortfolioLinks />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<PortfolioLinks />)).toMatchSnapshot()
    })
  })
})
