import { LINKS } from '../../utils/constants'
import SocialNetworks from './SocialNetworks'

describe('<SocialNetworks/>', () => {
  beforeEach(() => jest.clearAllMocks())

  it('redirects to the whatsapp link when the whatsapp icon is clicked', () => {
    const whatsappIcon = shallow(<SocialNetworks/>).find('FaWhatsapp')
    global.open = jest.fn()
    whatsappIcon.simulate('click')
    expect(global.open).toHaveBeenCalledTimes(1)
    expect(global.open).toHaveBeenCalledWith(LINKS.WHATSAPP, '_blank')
  })

  it('redirects to the github link when the github icon is clicked', () => {
    const githubIcon = shallow(<SocialNetworks/>).find('FaGithub')
    global.open = jest.fn()
    githubIcon.simulate('click')
    expect(global.open).toHaveBeenCalledTimes(1)
    expect(global.open).toHaveBeenCalledWith(LINKS.GITHUB, '_blank')
  })

  it('redirects to the linkedin link when the whatsapp icon is clicked', () => {
    const linkedinIcon = shallow(<SocialNetworks/>).find('FaLinkedin')
    global.open = jest.fn()
    linkedinIcon.simulate('click')
    expect(global.open).toHaveBeenCalledTimes(1)
    expect(global.open).toHaveBeenCalledWith(LINKS.LINKEDIN, '_blank')
  })

  it('redirects to the email link when the whatsapp icon is clicked', () => {
    const envelopeIcon = shallow(<SocialNetworks/>).find('FaEnvelope')
    global.open = jest.fn()
    envelopeIcon.simulate('click')
    expect(global.open).toHaveBeenCalledTimes(1)
    expect(global.open).toHaveBeenCalledWith(LINKS.EMAIL, '_blank')
  })

  describe('Snapshot', () => {
    it('renders without crashing using shallow', () => {
      expect(shallow(<SocialNetworks />)).toMatchSnapshot()
    })

    it('renders without crashing using render', () => {
      expect(render(<SocialNetworks />)).toMatchSnapshot()
    })

    it('renders without crashing using mount', () => {
      expect(mount(<SocialNetworks />)).toMatchSnapshot()
    })
  })
})
