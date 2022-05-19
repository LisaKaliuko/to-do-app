import React from 'react';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { globalStyles } from '@theme/index';
import Router from '@router/routes/index';
import Header from '@components/header';
import { Container } from './styled';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles styles={globalStyles} />
      <Container>
        <Header />
        <Router />
      </Container>
    </BrowserRouter>
  );
};

export default App;
