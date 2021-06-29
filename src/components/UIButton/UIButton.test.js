import UIButton from './UIButton'

describe('<UIButton/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<UIButton />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<UIButton />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<UIButton />)).toMatchSnapshot()
    })
  })
})
