import Experience from './Experience'

describe('<Experience/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Experience />)).toMatchSnapshot()
    })
  })
})
