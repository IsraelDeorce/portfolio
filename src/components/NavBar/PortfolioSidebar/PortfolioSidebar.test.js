import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import PortfolioSidebar from './PortfolioSidebar'
import * as S from './styles'

describe('<PortfolioSidebar/>', () => {
  const session = useSelector((state) => state.session)
  const dispatch = useDispatch()

  beforeEach(() => { session.isPortfolioSidebarOpen = true })
  afterEach(() => { jest.clearAllMocks() })

  it('does not render when isPortfolioSidebarOpen is false', () => {
    session.isPortfolioSidebarOpen = false
    expect(shallow(<PortfolioSidebar />).isEmptyRender()).toBe(true)
  })

  it('closes the PortfolioSidebar when the user clicks on the background', () => {
    shallow(<PortfolioSidebar />).find(S.Background).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: false })
  })

  it('closes the PortfolioSidebar when the user clicks on the titled logo', () => {
    shallow(<PortfolioSidebar />).find('TitledLogo').simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: false })
  })

  it('closes the PortfolioSidebar when the user clicks on the portfolio links', () => {
    shallow(<PortfolioSidebar />).find('PortfolioLinks').simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: false })
  })

  it('closes the PortfolioSidebar when the screen width is 992 pixels wide', () => {
    global.innerWidth = 992
    mount(<Router><PortfolioSidebar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: false })
  })

  it('closes the PortfolioSidebar when the screen width is wider than 992 pixels', () => {
    global.innerWidth = 993
    mount(<Router><PortfolioSidebar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isPortfolioSidebarOpen: false })
  })

  it('does not close the PortfolioSidebar when the screen width is smaller than 992 pixels', () => {
    global.innerWidth = 991
    mount(<Router><PortfolioSidebar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(0)
  })

  it('renders the portfolio links on vertical', () => {
    expect(shallow(<PortfolioSidebar />).find('PortfolioLinks').prop('orientation')).toBe('vertical')
  })

  it('hides the screen overflow when the PortfolioSidebar is open', () => {
    session.isPortfolioSidebarOpen = true
    mount(<Router><PortfolioSidebar /></Router>)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('returns the screen overflow when the PortfolioSidebar is closed', () => {
    session.isPortfolioSidebarOpen = false
    mount(<Router><PortfolioSidebar /></Router>)
    expect(document.body.style.overflow).toBe('visible')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<PortfolioSidebar />)).toMatchSnapshot()
    })
  })
})
