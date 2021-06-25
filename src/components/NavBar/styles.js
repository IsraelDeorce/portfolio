import styled from 'styled-components'

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: ${({ theme }) => theme.c_menu};
  padding: 0 1.5em;
  height: 60px;
  color: ${({ theme }) => theme.c_brackets};
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`
export const Hamburguer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (min-width: 992px) {
    display: none;
  }
`
