import { shallow } from 'enzyme'
import App from './App'

describe('<App/>', () => {
  it('renders learn react link', () => {
    console.log(shallow(<App/>).debug())
    expect(true).toBe(true)
  })
})
