const mock = jest.createMockFromModule('react-i18next')

const t = jest.fn((key) => key)
const useTranslation = () => ({ t })

mock.useTranslation = useTranslation
mock.t = t

module.exports = mock
