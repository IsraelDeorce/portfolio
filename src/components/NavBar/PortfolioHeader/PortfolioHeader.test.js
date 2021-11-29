import { useDispatch } from 'react-redux'
import PortfolioHeader from './PortfolioHeader'
import * as S from './styles'

describe('<PortfolioHeader/>', () => {
  const dispatch = useDispatch()

  afterEach(() => jest.clearAllMocks())

  it('calls the open side bar function so update the store with side bar is open', () => {
    shallow(<PortfolioHeader />).find(S.Hamburguer).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: true })
  })

  it('renders the titled logo as a link that redirects to the home section', () => {
    expect(shallow(<PortfolioSidebar />).find('HashLink').prop('to')).toBe('#home')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<PortfolioHeader />)).toMatchSnapshot()
    })
  })
})
