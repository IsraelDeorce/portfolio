import styled from 'styled-components'

export const Contact = styled.footer`
  justify-content: flex-end;
  min-height: 100px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3em;
  > :first-child{
    padding-bottom: 2em;
  }
`
export const TextualContacts = styled.div`
  display: flex;
  flex-direction: column;
  & p:not(:last-of-type) {
    padding-right: 1em;
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
`
