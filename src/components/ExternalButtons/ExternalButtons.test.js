import { t } from 'react-i18next'
import { FaGoogleDrive } from 'react-icons/fa'
import ExternalButtons from './ExternalButtons'
import { LINKS } from '../../utils/constants'

jest.mock('react-router-dom')

describe('<ExternalButtons/>', () => {
  afterEach(() => jest.clearAllMocks())

  it('renders a Visit my Blog UIButton with correct label and translation', () => {
    expect(shallow(<ExternalButtons/>).find('UIButton#blog-button').first().prop('label')).toBe('button.visit_my_blog')
    expect(t).toHaveBeenCalledWith('button.visit_my_blog')
  })

  describe('Resume Button', () => {
    it('renders a Resume UIButton with correct label and translation', () => {
      expect(shallow(<ExternalButtons/>).find('UIButton#resume-button').prop('label')).toBe('button.resume')
      expect(t).toHaveBeenCalledWith('button.resume')
    })
  
    it('renders a Resume UIButton with right icon as google drive', () => {
      expect(shallow(<ExternalButtons/>).find('UIButton#resume-button').prop('rightIcon')).toStrictEqual(<FaGoogleDrive/>)
    })

    it('opens a new window to the google drive resume', () => {
      global.open = jest.fn()      
      shallow(<ExternalButtons/>).find('UIButton#resume-button').simulate('click')
      expect(global.open).toHaveBeenCalledTimes(1)
      expect(global.open).toHaveBeenCalledWith(LINKS.GDRIVE, '_blank')
    })
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<ExternalButtons />)).toMatchSnapshot()
    })
  })
})
