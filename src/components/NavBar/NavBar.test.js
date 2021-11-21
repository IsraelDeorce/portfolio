import { useDispatch } from 'react-redux'
import NavBar from './NavBar'
import * as S from './styles'

describe('<NavBar/>', () => {
  const dispatch = useDispatch()

  afterEach(() => jest.clearAllMocks())

  it('calls the open side bar function so update the store with side bar is open', () => {
    shallow(<NavBar />).find(S.Hamburguer).simulate('click')
    expect(dispatch.session.update).toHaveBeenCalledTimes(1)
    expect(dispatch.session.update).toHaveBeenCalledWith({ isSideBarOpen: true })
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<NavBar />)).toMatchSnapshot()
    })
  })
})
