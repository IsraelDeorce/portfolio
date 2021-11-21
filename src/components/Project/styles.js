import styled from 'styled-components'

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  & :first-child {
    width: 100px;
    height: 100px;
  }
`
export const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.5em;
  text-align: center;
`

export const Subtitle = styled.h4`
  font-size: 0.9em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5em;
  text-align: center;
`