import TitledLogo from './TitledLogo'
import { TEXT } from '../../utils/constants'
import * as S from './styles'

describe('<TitledLogo/>', () => {
  it('renders a direwolf icon', () => {
    expect(shallow(<TitledLogo />).find('GiDirewolf').exists()).toBe(true)
  })

  it('renders a Israel Deorce as a label', () => {
    expect(shallow(<TitledLogo />).find('strong').text()).toBe(TEXT.MYNAME)
  })

  it('calls the onCLick function when it is passed and the user clicks on the Logo', () => {
    const mockFn = jest.fn()
    shallow(<TitledLogo onClick={mockFn} />).find(S.TitledLogo).simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
