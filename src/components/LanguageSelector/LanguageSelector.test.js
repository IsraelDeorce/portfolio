import LanguageSelector from './LanguageSelector'

describe('<LanguageSelector/>', () => {
  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<LanguageSelector />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<LanguageSelector />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<LanguageSelector />)).toMatchSnapshot()
    })
  })
})
