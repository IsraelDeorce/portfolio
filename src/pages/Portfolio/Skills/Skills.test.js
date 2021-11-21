import Skills from './Skills'

describe('<Skills/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Skills />)).toMatchSnapshot()
    })
  })
})
