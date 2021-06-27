import styled, { css } from 'styled-components'

export const PortfolioLinks = styled.div`
  display: flex;
  color: ${({ theme }) => theme.c_brackets};
  & > *:hover {
    color: ${({ theme }) => theme.c_varType};
  }
  ${({ orientation }) => orientation === 'horizontal' && css`
    & > *:not(:last-child) {
      margin-right: 2em;
    }
  `}
  ${({ orientation }) => orientation === 'vertical' && css`
    flex-direction: column;  
    & > * {
      margin: .75em 0;
    }
  `}
`
