import SideBar from './SideBar'

describe('<SideBar/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<SideBar />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<SideBar />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<SideBar />)).toMatchSnapshot()
    })
  })
})
