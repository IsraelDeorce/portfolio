import Spinner from './Spinner'

describe('<Spinner/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Spinner />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Spinner />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Spinner />)).toMatchSnapshot()
    })
  })
})
