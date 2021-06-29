const mock = jest.createMockFromModule('react-i18next')

const useTranslation = () => ({
  t: (key) => key
})

mock.useTranslation = useTranslation

module.exports = mock
