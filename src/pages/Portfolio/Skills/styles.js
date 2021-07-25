import styled from 'styled-components'

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_menu};
`

export const Progress = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  max-width: 600px;
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`
