import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import BlogSidebar from './BlogSidebar'
import * as S from './styles'

describe('<BlogSidebar/>', () => {
  const session = useSelector((state) => state.session)
  const dispatch = useDispatch()

  beforeEach(() => {
    session.isBlogSidebarOpen = false
    global.innerWidth = 1000
  })
  afterEach(() => { jest.clearAllMocks() })

  it('does not render when isBlogSidebarOpen is false and width is smaller than 992 pixels', () => {
    session.isBlogSidebarOpen = false
    global.innerWidth = 991
    const shallowed = mount(<BlogSidebar />)
    shallowed.update()
    expect(shallowed.isEmptyRender()).toBe(true)
  })

  it.only('closes the BlogSidebar when the user clicks on the background', () => {
    shallow(<BlogSidebar />).find(S.Background).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isBlogSidebarOpen: false })
  })

  it('renders the titled logo as a link that redirects to the default page', () => {
    const Link = shallow(<BlogSidebar />).find('Link')
    expect(Link.prop('to')).toBe('/')
    expect(Link.find('TitledLogo')).toHaveLength(1)
  })

  it('closes the BlogSidebar when the user clicks on the article links', () => {
    shallow(<BlogSidebar />).find('ArticleLinks').simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isBlogSidebarOpen: false })
  })

  it('closes the BlogSidebar when the screen width is 992 pixels wide', () => {
    global.innerWidth = 992
    mount(<BlogSidebar />)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isBlogSidebarOpen: false })
  })

  it('closes the BlogSidebar when the screen width is wider than 992 pixels', () => {
    global.innerWidth = 993
    mount(<BlogSidebar />)
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isBlogSidebarOpen: false })
  })

  it('does not close the BlogSidebar when the screen width is smaller than 992 pixels', () => {
    global.innerWidth = 991
    mount(<BlogSidebar />)
    expect(dispatch.session.update).toHaveBeenCalledTimes(0)
  })

  it('hides the screen overflow when the BlogSidebar is open', () => {
    session.isBlogSidebarOpen = true
    mount(<BlogSidebar />)
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('returns the screen overflow when the BlogSidebar is closed', () => {
    session.isBlogSidebarOpen = false
    mount(<BlogSidebar />)
    expect(document.body.style.overflow).toBe('visible')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<BlogSidebar />)).toMatchSnapshot()
    })
  })
})
