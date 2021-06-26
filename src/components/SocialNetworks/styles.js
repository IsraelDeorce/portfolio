import styled from 'styled-components'

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.c_brackets};
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`
