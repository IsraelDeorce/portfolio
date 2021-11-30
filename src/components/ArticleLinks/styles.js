import styled from 'styled-components'

export const ArticleLinks = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  & > * {
    color: ${({ theme }) => theme.c_brackets};
    &:hover {
      color: ${({ theme }) => theme.c_varType};
    }
    padding-bottom: 1em;
  }
`
