import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url("fonts/Montserrat-VariableFont_wght.ttf");
    font-weight: 100;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    overflow-x: hidden;
  }
`;
 
export default GlobalStyle;