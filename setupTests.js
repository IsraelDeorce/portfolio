import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

global.shallow = shallow
global.render = render
global.mount = mount

Enzyme.configure({ adapter: new Adapter() })
