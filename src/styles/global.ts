import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  :root {

    font-family: sans-serif;
    font-size: 62.5%;
    height: 100%;
    width: 100%;
  }

  body {

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

    display: flex;

   height: 100%;
    width: 100%;
  }
  #__next{
    height: 100%;
    width: 100%;
  }


  li {
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.h1.size};
    font-weight: ${({ theme }) => theme.fonts.h1.weight};
    line-height: ${({ theme }) => theme.fonts.h1.height};
  }
  h2 {
    font-size: ${({ theme }) => theme.fonts.h2.size};
    font-weight: ${({ theme }) => theme.fonts.h2.weight};
    line-height: ${({ theme }) => theme.fonts.h2.height};
  }
  h3 {
    font-size: ${({ theme }) => theme.fonts.h3.size};
    font-weight: ${({ theme }) => theme.fonts.h3.weight};
    line-height: ${({ theme }) => theme.fonts.h3.height};
  }
  h4 {
    font-size: ${({ theme }) => theme.fonts.h4.size};
    font-weight: ${({ theme }) => theme.fonts.h4.weight};
    line-height: ${({ theme }) => theme.fonts.h4.height};
  }
  h5 {
    font-size: ${({ theme }) => theme.fonts.h5.size};
    font-weight: ${({ theme }) => theme.fonts.h5.weight};
    line-height: ${({ theme }) => theme.fonts.h5.height};
  }
  h6 {
    font-size: ${({ theme }) => theme.fonts.h6.size};
    font-weight: ${({ theme }) => theme.fonts.h6.weight};
    line-height: ${({ theme }) => theme.fonts.h6.height};
  }
  label, li {
    font-size: ${({ theme }) => theme.fonts.subtitle.size};
    font-weight: ${({ theme }) => theme.fonts.subtitle.weight};
    line-height: ${({ theme }) => theme.fonts.subtitle.height};
  }
  p, textarea, input {
    font-size: ${({ theme }) => theme.fonts.body.normal.size};
    font-weight: ${({ theme }) => theme.fonts.body.normal.weight};
    line-height: ${({ theme }) => theme.fonts.body.normal.height};

    &.small {
      font-size: ${({ theme }) => theme.fonts.body.small.size};
      font-weight: ${({ theme }) => theme.fonts.body.small.weight};
      line-height: ${({ theme }) => theme.fonts.body.small.height};
    }
    &.large {
      font-size: ${({ theme }) => theme.fonts.body.large.size};
      font-weight: ${({ theme }) => theme.fonts.body.large.weight};
      line-height: ${({ theme }) => theme.fonts.body.large.height};
    }
  }
  span {
    font-size: ${({ theme }) => theme.fonts.caption.size};
    font-weight: ${({ theme }) => theme.fonts.caption.weight};
    line-height: ${({ theme }) => theme.fonts.caption.height};
  }
  button, a{
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.button.normal.size};
    font-weight: ${({ theme }) => theme.fonts.button.normal.weight};
    line-height: ${({ theme }) => theme.fonts.button.normal.height};

    &.small {
      font-size: ${({ theme }) => theme.fonts.button.small.size};
      font-weight: ${({ theme }) => theme.fonts.button.small.weight};
      line-height: ${({ theme }) => theme.fonts.button.small.height};
    }
    &.medium {
      font-size: ${({ theme }) => theme.fonts.button.medium.size};
      font-weight: ${({ theme }) => theme.fonts.button.medium.weight};
      line-height: ${({ theme }) => theme.fonts.button.medium.height};
    }
    &.large {
      font-size: ${({ theme }) => theme.fonts.button.large.size};
      font-weight: ${({ theme }) => theme.fonts.button.large.weight};
      line-height: ${({ theme }) => theme.fonts.button.large.height};
    }

    span {
      font: inherit;
    }
  }

`

export default GlobalStyles
