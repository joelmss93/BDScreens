import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-size: 14px;
    color: ${(props) => props.theme.colors.white};
    font-family: Roboto;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`
