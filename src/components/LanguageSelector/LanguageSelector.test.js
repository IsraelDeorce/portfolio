import { useDispatch } from 'react-redux'
import { formatLanguage } from '../../utils'
import LanguageSelector from './LanguageSelector'
import * as S from './styles'

jest.mock('../../utils', () => ({
  formatLanguage: jest.fn(() => 'en')
}))

describe('<LanguageSelector/>', () => {
  const dispatch = useDispatch()

  afterEach(() => jest.clearAllMocks())

  it('renders with a formated code as "en" when formatLanguage returns it', () => {
    formatLanguage.mockImplementationOnce(() => 'en')
    const languageCode = mount(<LanguageSelector />).find(S.LanguageCode).find('div').text()
    expect(languageCode).toBe('en')
  })

  it('renders with a formated code as "pt" when formatLanguage returns it', () => {
    formatLanguage.mockImplementationOnce(() => 'pt')
    const languageCode = mount(<LanguageSelector />).find(S.LanguageCode).find('div').text()
    expect(languageCode).toBe('pt')
  })

  it('renders with Canadian flag when formatLanguage returns "en"', () => {
    formatLanguage.mockImplementationOnce(() => 'en')
    const flag = mount(<LanguageSelector />).find(S.LanguageSelector).find('CA[title="Canada"]')
    expect(flag.exists()).toBe(true)
  })

  it('renders with Brazilian flag when formatLanguage returns "pt"', () => {
    formatLanguage.mockImplementationOnce(() => 'pt')
    const flag = mount(<LanguageSelector />).find(S.LanguageSelector).find('BR[title="Brasil"]')
    expect(flag.exists()).toBe(true)
  })
  
  it('calls the change language function with pt when current language is en and user clicks', () => {
    formatLanguage.mockImplementationOnce(() => 'en')
    mount(<LanguageSelector/>).find(S.LanguageSelector).simulate('click')
    expect(dispatch.session.changeLanguage).toHaveBeenCalledTimes(1)
    expect(dispatch.session.changeLanguage).toHaveBeenCalledWith({ language: 'pt' })
  })

  it('calls the change language function with en when current language is pt and user clicks', () => {
    formatLanguage.mockImplementationOnce(() => 'pt')
    mount(<LanguageSelector/>).find(S.LanguageSelector).simulate('click')
    expect(dispatch.session.changeLanguage).toHaveBeenCalledTimes(1)
    expect(dispatch.session.changeLanguage).toHaveBeenCalledWith({ language: 'en' })
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<LanguageSelector />)).toMatchSnapshot()
    })
  })
})
