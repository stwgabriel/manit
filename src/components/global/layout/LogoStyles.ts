import { Montserrat } from 'next/font/google'
import styled from 'styled-components'

const montSerratFont = Montserrat({ subsets: ['latin'] })

const LogoStyles = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  font-family: ${montSerratFont.style.fontFamily}!important;
  font-size: 3.2rem!important;
  font-weight: 700!important;

  &>span {
    color: ${({ theme }) => theme.colors.secondary.main} !important;
    font-family: ${montSerratFont.style.fontFamily}!important;
    font-size: 3.2rem!important;
    font-weight: 700!important;
  }
`
export default LogoStyles
