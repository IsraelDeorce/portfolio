import ExternalButtons from './ExternalButtons'

describe('<ExternalButtons/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<ExternalButtons />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<ExternalButtons />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<ExternalButtons />)).toMatchSnapshot()
    })
  })
})
