import TitledLogo from './TitledLogo'
import { TEXT } from '../../utils/constants'

describe('<TitledLogo/>', () => {
  it('renders a link that redirects to the home section', () => {
    expect(shallow(<TitledLogo />).find('HashLink').prop('to')).toBe('#home')
  })

  it('renders a direwolf icon', () => {
    expect(shallow(<TitledLogo />).find('GiDirewolf').exists()).toBe(true)
  })

  it('renders a Israel Deorce as a label', () => {
    expect(shallow(<TitledLogo />).find('strong').text()).toBe(TEXT.MYNAME)
  })

  it('calls the onCLick function when it is passed and the user clicks on the Logo', () => {
    const mockFn = jest.fn()
    shallow(<TitledLogo onClick={mockFn} />).find('HashLink').simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<TitledLogo />)).toMatchSnapshot()
    })
  })
})
