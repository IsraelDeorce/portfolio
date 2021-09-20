import { useHistory } from 'react-router-dom'
import Blog from './Blog'

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(() => ({}))
}))

describe('<Blog/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Blog />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Blog />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Blog />)).toMatchSnapshot()
    })
  })
})
