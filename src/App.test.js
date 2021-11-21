import { shallow, render, mount } from 'enzyme'
import App from './App'

describe('<App/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<App />)).toMatchSnapshot()
    })
  })
})
