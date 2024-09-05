import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

*{
    font-family: "Work Sans", sans-serif;
    margin: 0;
    padding: 0;
}

.interface{
    max-width: 1280px;
}

html{
    scroll-behavior: smooth;
}
`

export default GlobalStyle