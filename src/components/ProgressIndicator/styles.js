import styled from 'styled-components'

export const ProgressIndicator = styled.div`
  display: flex;
  align-items: center;
`

export const ProgressBar = styled.div`
  display: flex;
  border-radius: 25px;
  border: 4px solid ${({ theme }) => theme.c_function};
  min-width: 180px;
  height: 30px;
  padding: 3.5px;
  margin-right: 0.5em;
  @media (min-width: 576px) {
    min-width: 350px;
  }
`

export const Progress = styled.div`
  background-color: ${({ theme }) => theme.c_varDeclaration};
  border-radius: 25px;
  min-width: ${({ percentage }) => percentage}%;
`
