import styled from 'styled-components'

export const BlogHeader = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: ${({ theme }) => theme.c_menu};
  color: ${({ theme }) => theme.c_brackets};
  padding: 0 1.5em;
  min-height: 60px;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
  @media (min-width: 992px) {
    display: none;
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
`
