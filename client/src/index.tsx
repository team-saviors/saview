import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './assets/styles/GlobalStyle';
import { StyledEngineProvider } from '@mui/styled-engine';
import ScrollToTop from './utils/ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ScrollToTop />
      <GlobalStyle />
      <App />
    </StyledEngineProvider>
  </BrowserRouter>
);
