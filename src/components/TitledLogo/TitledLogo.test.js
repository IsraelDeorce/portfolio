import TitledLogo from './TitledLogo'

describe('<TitledLogo/>', () => {
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
