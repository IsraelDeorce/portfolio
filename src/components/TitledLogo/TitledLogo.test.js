import TitledLogo from './TitledLogo'
import { TEXT } from '../../utils/constants'
import * as S from './styles'

describe('<TitledLogo/>', () => {
  it('renders a link that redirects to the home section', () => {
    expect(shallow(<TitledLogo />).find(S.Title).prop('href')).toBe('#home')
  })

  it('renders a direwolf icon', () => {
    expect(shallow(<TitledLogo />).find('GiDirewolf').exists()).toBe(true)
  })

  it('renders a Israel Deorce as a label', () => {
    expect(shallow(<TitledLogo />).find('strong').text()).toBe(TEXT.MYNAME)
  })

  it('calls the onCLick function when it is passed and the user clicks on the Logo', () => {
    const mock = jest.fn()
    shallow(<TitledLogo onClick={mock} />).find(S.Title).simulate('click')
    expect(mock).toHaveBeenCalledTimes(1)
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<TitledLogo />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<TitledLogo />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<TitledLogo />)).toMatchSnapshot()
    })
  })
})
