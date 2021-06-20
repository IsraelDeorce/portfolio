import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const HorizontalWrapper = styled.div`
  ${(props) => { console.log(props) }}
  display: none;
  & > * {
    cursor: pointer;
  }
  & > *:not(:last-child) {
    margin-right: 2em;
  }
  & > *:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (min-width: 992px) {
    display: flex;
  }
`

const VerticalWrapper = styled.div`
  ${(props) => { console.log(props) }}
  display: none;
  flex-direction: column;
  & > * {
    cursor: pointer;
  }
  & > * {
    margin-right: 2em;
  }
  & > *:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (max-width: 992px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  }
`

function NavItemsList ({ isOpen }) {
  const { t } = useTranslation()

  const list =
    <>
      <a href='#home'>
        <strong>{t('button.skills')}</strong>
      </a>
      <a href='#sec1'>
        <strong>{t('button.projects')}</strong>
      </a>
      <a href='#sec2'>
        <strong>{t('button.education')}</strong>
      </a>
      <a href='#sec3'>
        <strong>{t('button.awards')}</strong>
      </a>
      <a href='#sec4'>
        <strong>{t('button.curiosities')}</strong>
      </a>
      <a href='#sec5'>
        <strong>{t('button.contact')}</strong>
      </a>
    </>

  return (
    <>
      <VerticalWrapper isOpen={isOpen}>{list}</VerticalWrapper>
      <HorizontalWrapper isOpen={isOpen}>{list}</HorizontalWrapper>
    </>
  )
}

export default NavItemsList
