import styled, { css } from 'styled-components'

export const UIButton = styled.button`
  display: flex;
  justify-content: center;
  padding: .75rem 1.25rem;
  cursor: pointer;
  > *:not(:last-child) {
    padding-right: 0.25em;
  }
  ${({ theme, secondary }) => secondary
  ? css`
    color: ${theme.c_component};
    :hover {
      color: ${({ theme }) => theme.c_varType};
    }
  `
  : css`
    background-color: ${theme.c_component};
    color: ${theme.c_background};
    :hover {
      background-color: ${({ theme }) => theme.c_varType};
    }
  `}

`
