import styled from 'styled-components'

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.c_brackets};
`

export const LanguageCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`