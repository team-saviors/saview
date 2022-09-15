import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './assets/styles/GlobalStyle';
import { store } from './redux/store/index';
import { Provider } from 'react-redux';
//mui styled-component 설정
import { StyledEngineProvider } from '@mui/styled-engine';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </StyledEngineProvider>
);
