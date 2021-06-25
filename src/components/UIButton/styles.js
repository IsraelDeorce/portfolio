import styled, { css } from 'styled-components'

export const UIButton = styled.button`
  display: flex;
  justify-content: center;
  padding: .75rem 1.25rem;
  ${({ theme, secondary }) => secondary
  ? css`
    color: ${theme.c_component};
  `
  : css`
    background-color: ${theme.c_component};
    color: ${theme.c_background};
  `}
`

export const Label = styled.label`
  padding: 0 0.25rm;
`
