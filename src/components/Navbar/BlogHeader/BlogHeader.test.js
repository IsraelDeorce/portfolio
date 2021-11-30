import { useDispatch } from 'react-redux'
import BlogHeader from './BlogHeader'
import * as S from './styles'

describe('<BlogHeader/>', () => {
  const dispatch = useDispatch()

  afterEach(() => jest.clearAllMocks())

  it('calls the open side bar function so update the store with side bar is open', () => {
    shallow(<BlogHeader />).find(S.Hamburguer).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isBlogSidebarOpen: true })
  })

  it('renders the titled logo as a link that redirects to the default page', () => {
    const Link = shallow(<BlogHeader />).find('Link')
    expect(Link.prop('to')).toBe('/')
    expect(Link.find('TitledLogo')).toHaveLength(1)
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<BlogHeader />)).toMatchSnapshot()
    })
  })
})
