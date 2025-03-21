import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  font-family: 'Lexend Deca' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  background-color: #E5E5E5;
}
*, *:before, *:after {
  box-sizing: inherit;
}

p {
  color: ${props => props.theme.text};
}

h1 {
  font-size: 23px !important;
  line-height: 29px !important;
  color: ${props => props.theme.title};
}

button {
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  :active {
    scale: 0.9;
  }
  :disabled {
    opacity: 0.6;
    cursor: wait;
    :hover {
      opacity: 0.6;
    }
    :active {
      scale: 1;
    }
  }
}
input {
  :disabled {
    background: ${(props) => props.theme.background};
    opacity: 0.6;
    ::placeholder {
      opacity: 0.6;
    }
  }
}
`;

export default GlobalStyle;
