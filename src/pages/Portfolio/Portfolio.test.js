import { HashRouter as Router } from 'react-router-dom'
import Portfolio from './Portfolio'

describe('<Portfolio/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Portfolio />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<Router><Portfolio /></Router>)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<Router><Portfolio /></Router>)).toMatchSnapshot()
    })
  })
})
