import styled from 'styled-components'

export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_background};
  padding: 3em 1em 1em 1em;
  @media (min-width: 992px) {
    padding: 0.5em 1em;
  }
`
