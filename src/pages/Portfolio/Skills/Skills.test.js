import Skills from './Skills'

describe('<Skills/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Skills />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Skills />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Skills />)).toMatchSnapshot()
    })
  })
})
