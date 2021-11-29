import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  
padding:0;
margin:0;
text-decoration: none;

font-family: 'Mark Pro', sans-serif;
input:focus{
    outline: none;
}
}
`;

export default GlobalStyles;
