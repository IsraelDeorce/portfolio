import { HashRouter as Router } from 'react-router-dom'
import Portfolio from './Portfolio'

describe('<Portfolio/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<Portfolio />)).toMatchSnapshot()
    })
  })
})