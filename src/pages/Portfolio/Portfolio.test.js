import Portfolio from './Portfolio'

describe('<Portfolio/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Portfolio />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Portfolio />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Portfolio />)).toMatchSnapshot()
    })
  })
})
