import styled from 'styled-components'

export const Background = styled.div`
  opacity: 0.7;
  background-color: ${({ theme }) => theme.c_background};
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
`
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.c_menu};
  height: 100vh;
  width: 75vw;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  z-index: 2;
  box-shadow: 0 5px 30px ${({ theme }) => theme.c_tab};
  padding-left: 2em;
  & > * {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 60px;
  border-bottom: 2px solid gray;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`

export const Preferences = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.75em;
  }
`
