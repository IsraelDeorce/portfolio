import styled from 'styled-components'
import Vancouver from '../../../assets/Vancouver.jpg'

export const Home = styled.section`
  background-position: top right 30%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${Vancouver});
  background-size: cover;
  color: #D4D4C8;
  padding-top: 7em;
  padding-bottom: 4.5em;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 4em;
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
`

export const Subtitle = styled.p`
  font-size: 30px;
`
