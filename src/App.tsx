import React from 'react';
import { GlobalStyles } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { globalStyles } from '@theme/index';
import PrimaryButton from '@common/Buttons/Buttons';
import Router from '@router/routes/index';
import { Container, Header, LogoContainer, Icon, LogoText, Link } from './styled';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalStyles styles={globalStyles} />
      <Container>
        <Header>
          <LogoContainer>
            <Icon />
            <LogoText>ToDo Your Life</LogoText>
          </LogoContainer>
          <div>
            <Link to="/">Home</Link>
            <Link to="about">About us</Link>
            <Link to="blog">Blog</Link>
            <Link to="opportunities">Opportunities</Link>
          </div>
          <div>
            <Link to="login">Log In</Link>
            <PrimaryButton size="medium">Sign Up</PrimaryButton>
          </div>
        </Header>
        <Router />
      </Container>
    </BrowserRouter>
  );
};

export default App;
