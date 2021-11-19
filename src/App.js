import React from 'react';

import Routes from './routes';
import { BaseCSS } from 'styled-bootstrap-grid';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BaseCSS />
      <Routes/>
    </>
  );
}

export default App;
