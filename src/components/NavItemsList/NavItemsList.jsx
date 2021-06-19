import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Items = styled.div`
  display: flex;
  & > * {
    cursor: pointer;
  }
  & > *:not(:last-child) {
    margin-right: 0.75rem;
  }
  & > *:hover {
    color: ${(props) => props.theme.c_varType};
  }
  @media (max-width: 992px) {
    display: none;
  }
`

function NavItemsList ({ direction = 'column' }) {
  const { t } = useTranslation()

  return (
    <Items style={{ flexDirection: direction }}>
      <strong href='#home'>{t('button.skills')}</strong>
      <strong href='#top'>{t('button.projects')}</strong>
      <strong href='#top'>{t('button.education')}</strong>
      <strong href='#top'>{t('button.awards')}</strong>
      <strong href='#top'>{t('button.curiosities')}</strong>
      <strong href='#top'>{t('button.contact')}</strong>
    </Items>
  )
}

export default NavItemsList
