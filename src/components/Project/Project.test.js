import Project from './Project'

describe('<Project/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Project />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Project />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Project />)).toMatchSnapshot()
    })
  })
})
