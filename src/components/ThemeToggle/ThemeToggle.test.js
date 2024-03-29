import { useDispatch } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

describe('<ThemeToggle/>', () => {
  const dispatch = useDispatch()

  afterEach(() => jest.clearAllMocks())

  it('renders a Toggle component from react-togle with a sun and moon as icons', () => {
    const expected = {
      checked: <FaSun />,
      unchecked: <FaMoon />
    }
    expect(shallow(<ThemeToggle />).find('Toggle').prop('icons')).toStrictEqual(expected)
  })

  it('calls the switch theme function when the user clicks on the Toggle', () => {
    shallow(<ThemeToggle />).find('Toggle').simulate('change')
    expect(dispatch.session.switchTheme).toHaveBeenCalled()
  })
})
