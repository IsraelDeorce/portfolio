import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import SideBar from './SideBar'
import * as S from './styles'

describe('<SideBar/>', () => {
  const session = useSelector((state) => state.session)
  const dispatch = useDispatch()

  beforeEach(() => { session.isSideBarOpen = true })
  afterEach(() => { jest.clearAllMocks() })

  it('does not render when isSideBarOpen is false', () => {
    session.isSideBarOpen = false
    expect(shallow(<SideBar />).isEmptyRender()).toBe(true)
  })

  it('closes the sidebar when the user clicks on the background', () => {
    shallow(<SideBar />).find(S.Background).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: false })
  })

  it('closes the sidebar when the user clicks on the titled logo', () => {
    shallow(<SideBar />).find('TitledLogo').simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: false })
  })

  it('closes the sidebar when the user clicks on the portfolio links', () => {
    shallow(<SideBar />).find('PortfolioLinks').simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: false })
  })

  it('closes the sidebar when the screen width is 992 pixels wide', () => {
    global.innerWidth = 992
    mount(<Router><SideBar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: false })
  })

  it('closes the sidebar when the screen width is wider than 992 pixels', () => {
    global.innerWidth = 993
    mount(<Router><SideBar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: false })
  })

  it('does not close the sidebar when the screen width is smaller than 992 pixels', () => {
    global.innerWidth = 991
    mount(<Router><SideBar /></Router>)
    expect(dispatch.session.update).toHaveBeenCalledTimes(0)
  })

  it('renders the portfolio links on vertical', () => {
    expect(shallow(<SideBar />).find('PortfolioLinks').prop('orientation')).toBe('vertical')
  })

  it('hides the screen overflow when the sidebar is open', () => {
    session.isSideBarOpen = true
    mount(<Router><SideBar /></Router>)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('returns the screen overflow when the sidebar is closed', () => {
    session.isSideBarOpen = false
    mount(<Router><SideBar /></Router>)
    expect(document.body.style.overflow).toBe('visible')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<SideBar />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Router><SideBar /></Router>)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Router><SideBar /></Router>)).toMatchSnapshot()
    })
  })
})
