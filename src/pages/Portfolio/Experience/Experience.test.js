import Experience from './Experience'

describe('<Experience/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Experience />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Experience />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Experience />)).toMatchSnapshot()
    })
  })
})
