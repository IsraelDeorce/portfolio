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

  it('renders a hash link that refers to #about with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('HashLink[to="#about"]').text()).toBe('button.about')
    expect(t).toHaveBeenCalledWith('button.about')
  })

  it('renders a hash link that refers to #skills with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('HashLink[to="#skills"]').text()).toBe('button.skills')
    expect(t).toHaveBeenCalledWith('button.skills')
  })

  it('renders a hash link that refers to #experience with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('HashLink[to="#experience"]').text()).toBe('button.experience')
    expect(t).toHaveBeenCalledWith('button.experience')
  })

  it('renders a hash link that refers to #contact with correct translation', () => {
    expect(shallow(<PortfolioLinks />).find('HashLink[to="#contact"]').text()).toBe('button.contact')
    expect(t).toHaveBeenCalledWith('button.contact')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<PortfolioLinks />)).toMatchSnapshot()
    })
  })
})
