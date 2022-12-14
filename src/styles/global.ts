import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing:0;
        font-family: 'Open Sans', sans-serif;
    }
    body {
        padding:0;
        margin: 0;
        font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }

    .svg {
        width:14px;
        height:14px;
    }
`;
export default GlobalStyle;