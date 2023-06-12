import { createGlobalStyle } from 'styled-components';

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

h3 {
  font-size: 1rem;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}



`;

export default GlobalStyle;
