import styled, { css } from 'styled-components'

export const MenuLinks = styled.div`
  display: none
  & > * {
    cursor: pointer;
  }
  & > *:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (min-width: 992px) {
    display: flex;
    & > *:not(:last-child) {
      margin-right: 2em;
    }
  }
  @media (max-width: 992px) {
    display: none;
    
    ${({ isMenuOpen }) => isMenuOpen && css`
      display: flex;
      flex-direction: column;
      & > * {
        margin: .75em 0;
      }
    `}
  }
`
