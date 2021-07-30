import styled from 'styled-components'

export const Skills = styled.section``

export const Progress = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 600px;
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`
