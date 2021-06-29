import ThemeToggle from './ThemeToggle'

describe('<ThemeToggle/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<ThemeToggle />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<ThemeToggle />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<ThemeToggle />)).toMatchSnapshot()
    })
  })
})
