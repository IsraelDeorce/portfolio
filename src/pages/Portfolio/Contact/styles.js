import styled from 'styled-components'

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
  align-items: center;
  & p:last-of-type {
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    & p {
      margin: 0;
    }
    & p:not(:last-of-type) {
      margin-right: 2em;
    }
  }
`
