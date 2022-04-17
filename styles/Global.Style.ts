import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
        scroll-behavior: smooth;

    }

    body {
        font-size: 14px;

    }    
    

    input:focus {
      outline: none;
    }

    * { 
        padding: 0;
        margin: 0;
        color: #000;
        box-sizing: border-box;
        font-family: "Fira Sans", sans-serif;
    }
`;
