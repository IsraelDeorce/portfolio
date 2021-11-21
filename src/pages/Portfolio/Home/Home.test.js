import Home from './Home'

jest.mock('react-router-dom')

describe('<Home/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Home />)).toMatchSnapshot()
    })
  })
})
