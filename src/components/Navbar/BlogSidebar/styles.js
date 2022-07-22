import styled from 'styled-components'

export const Background = styled.div`
  opacity: 0.7;
  background-color: ${({ theme }) => theme.c_background};
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  @media (min-width: 992px) {
    display: none;
  }
`

export const BlogSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_menu};
  height: 100vh;
  width: 65vw;
  z-index: 2;
  box-shadow: 0 5px 30px ${({ theme }) => theme.c_tab};
  padding: 0 1em 1em 1em;
  & > * {
    width: 100%;
  }
  & > :last-child {
    align-self: center;
  }
  @media (min-width: 992px) {
    position: static;
    top: auto;
    left: auto;
    right: auto;
    height: auto;
    width: 285px;
    min-width: 285px;
    box-shadow: none;
  }
`

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 60px;
  border-bottom: 2px solid gray;
  & > *:not(:last-child) {
    padding: 0.35em;
  }
`

export const Preferences = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`
