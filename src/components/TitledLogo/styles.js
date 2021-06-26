import styled from 'styled-components'

export const Title = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.c_brackets};
  &:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
`
