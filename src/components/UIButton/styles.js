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
  `
  : css`
    background-color: ${theme.c_component};
    color: ${theme.c_background};
  `}
`
