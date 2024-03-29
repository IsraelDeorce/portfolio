import styled from 'styled-components'

export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    display: flex;
    flex-direction: column;
  }
  > :nth-child(even) {
    background-color: ${({ theme }) => theme.c_menu};
  }
  > :nth-child(odd) {
    background-color: ${({ theme }) => theme.c_background};
  }
`
