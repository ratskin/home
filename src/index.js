import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import aileronRegular from './assets/fonts/Aileron/Aileron-Regular.otf';
import bigJohn from './assets/fonts/Big John Slim Joe/BIG JOHN.otf';
import finlandRoundedThin from './assets/fonts/Finland/Finland Rounded Thin.otf';

// Inject global styles
const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: Aileron;
     src: url('${aileronRegular}') format('opentype');
  }
  @font-face {
     font-family: BigJohn;
     src: url('${bigJohn}') format('opentype');
  }
  @font-face {
     font-family: FinlandRounded;
     src: url('${finlandRoundedThin}') format('opentype');
  }

  :root {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Aileron', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <App />
      <GlobalStyle />
    </>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
