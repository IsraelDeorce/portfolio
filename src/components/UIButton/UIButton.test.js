import UIButton from './UIButton'
import * as S from './styles'

describe('<UIButton/>', () => {
  it('it renders a button with left icon, a label and a right icon', () => {
    const Element = (props) => <div>{props.desc}</div>
    const leftIcon = <Element desc='leftIcon' />
    const rightIcon = <Element desc='rightIcon' />
    const label = 'Lorem Ipsum'
    const shallowed = shallow(<UIButton leftIcon={leftIcon} rightIcon={rightIcon} label={label} />)
    expect(shallowed.find(S.UIButton).children()).toHaveLength(3)
    expect(shallowed.find(S.UIButton).childAt(0).find('Element[desc="leftIcon"]').exists()).toBe(true)
    expect(shallowed.find(S.UIButton).childAt(1).find('span').text()).toBe(label)
    expect(shallowed.find(S.UIButton).childAt(2).find('Element[desc="rightIcon"]').exists()).toBe(true)
  })

  it('sets the secondary theme', () => {
    expect(shallow(<UIButton secondary />).find(S.UIButton).prop('secondary')).toBe(true)
  })

  it('calls the onClick function when it is passed', () => {
    const mockFn = jest.fn()
    shallow(<UIButton onClick={mockFn} />).find(S.UIButton).simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<UIButton />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<UIButton />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<UIButton />)).toMatchSnapshot()
    })
  })
})
