import styled from 'styled-components'

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    padding: 0 1em 1em 1em;
  }
  @media (min-width: 992px) {
    margin: 0 10%;
  }
`
