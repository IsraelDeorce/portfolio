import styled from 'styled-components'

export const Blog = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.c_string};
  > :last-child {
    margin-top: 1.5em;
    height: 200px;
    width: 200px;
  }
`
