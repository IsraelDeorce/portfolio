import styled from 'styled-components'

export const PortfolioSidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_menu};
  padding: 0 2em;
  & > * {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 60px;
  border-bottom: 2px solid gray;
  & > *:not(:last-child) {
    padding: 0.35em;
  }
`

export const Preferences = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`
