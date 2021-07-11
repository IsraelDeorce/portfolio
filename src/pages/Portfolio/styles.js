import styled from 'styled-components'

// background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('../../assets/Vancouver.jpg');
// background-size: cover;
export const Portfolio = styled.div`
  background-position: top right 30%;
  background-color: ${({ theme }) => theme.c_background};
  color: ${({ theme }) => theme.c_brackets};
  padding: 7em 2em 4.5em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.p`
  font-size: 30px;
`

// const Placeholder1 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_importExport};`
// const Placeholder2 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_string};`
// const Placeholder3 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_varDeclaration};`
// const Placeholder4 = styled(Placeholder)`background-color: ${({ theme }) => theme.c_number};`
export const Placeholder = styled.section`
  scroll-behavior: smooth;
  min-height: 400px;
  border-bottom: 4px solid black;
`