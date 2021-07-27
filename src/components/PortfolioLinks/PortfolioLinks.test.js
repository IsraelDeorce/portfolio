import { t } from 'react-i18next'
import PortfolioLinks from './PortfolioLinks'
import * as S from './styles' 

describe('<PortfolioLinks/>', () => {
  afterEach(() => jest.clearAllMocks())

  it('renders four portfolio links', () => {
    const shallowed = shallow(<PortfolioLinks />).find(S.PortfolioLinks)
    expect(shallowed.children()).toHaveLength(4)
  })

  it('renders with horizontal orientation by default', () => {
    expect(shallow(<PortfolioLinks />).find(S.PortfolioLinks).prop('orientation')).toBe('horizontal')
  })

  it('renders with vertical orientation when passed', () => {
    expect(shallow(<PortfolioLinks orientation='vertical' />).find(S.PortfolioLinks).prop('orientation')).toBe('vertical')
  })

  it('renders a link that refers to #skills with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('a[href="#skills"]').text()).toBe('button.skills')
    expect(t).toHaveBeenCalledWith('button.skills')
  })

  it('renders a link that refers to #experience with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('a[href="#experience"]').text()).toBe('button.experience')
    expect(t).toHaveBeenCalledWith('button.experience')
  })

  it('renders a link that refers to #sec3 with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('a[href="#sec3"]').text()).toBe('button.education')
    expect(t).toHaveBeenCalledWith('button.education')
  })

  it('renders a link that refers to #sec4 with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('a[href="#sec4"]').text()).toBe('button.contact')
    expect(t).toHaveBeenCalledWith('button.contact')
  })

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
