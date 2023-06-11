import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

html {
  font-size: 16px;
}

html,
body {
  margin: 0;
  background: #faf8ef;
  color: #776e65;
}

h1 {
  font-size: 4rem;
  margin: 0;
}

button {
  background: #8f7a66;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 6px;
  transition: var(--animation-duration) ease-in-out all;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.8;
  }
}



`;

export default GlobalStyle;
