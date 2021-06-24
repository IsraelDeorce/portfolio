import styled, { css } from 'styled-components'

export const Menu = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
  ${({ isOpen }) => isOpen && css`
    flex-direction: column-reverse;;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.c_menu};
    height: 100vh;
    width: 75vw;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 0;
    box-shadow: blue;
    z-index: 2;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 5px 30px ${({ theme }) => theme.c_tab};
    padding-left: 2em;
  `}
`

/*
opacity: 0;
-webkit-transform: translate3d(-100%,0,0);
transition-property: opacity,visibility,transform,-webkit-transform;
transition-timing-function: ease-in-out;
transform: translate3d(-100%,0,0);
transition-duration: .25s;
*/


export const UserPreferences = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
  @media (max-width: 992px) {
    display: none;
    ${({ isOpen }) => isOpen && css`
      display: flex;
      border-bottom: 2px solid gray;
      padding: 0.35em 0;
      margin-bottom: 0.35em;
    `};
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