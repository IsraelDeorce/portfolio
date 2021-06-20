import styled from 'styled-components'

export const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const LanguageCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`