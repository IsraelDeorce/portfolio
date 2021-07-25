import styled from 'styled-components'

export const Skills = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.c_menu};
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  & > *:not(:last-child) {
    margin-bottom: 1em;
  }
`
