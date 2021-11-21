import Project from './Project'

describe('<Project/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Project />)).toMatchSnapshot()
    })
  })
})
