import styled from 'styled-components'

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  background-color: ${({ theme }) => theme.c_importExport};
  color: ${({ theme }) => theme.c_background};
`
