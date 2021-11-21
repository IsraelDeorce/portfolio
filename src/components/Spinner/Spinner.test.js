import Spinner from './Spinner'

describe('<Spinner/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Spinner />)).toMatchSnapshot()
    })
  })
})
