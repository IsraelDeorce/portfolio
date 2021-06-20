import styled from 'styled-components'

export const Horizontal = styled.div`
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

export const Vertical = styled.div`
  display: none;
  flex-direction: column;
  & > * {
    cursor: pointer;
  }
  & > *:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  @media (max-width: 992px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  }
`
