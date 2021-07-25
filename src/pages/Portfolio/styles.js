import styled from 'styled-components'

export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_background};
`

export const Placeholder = styled.section`
  scroll-behavior: smooth;
  min-height: 400px;
  border-bottom: 4px solid black;
`
