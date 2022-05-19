import React from 'react';
import PrimaryButton from '@common/Buttons/Buttons';
import { Container, LogoContainer, Icon, Text, Link } from './styled';

const Header: React.FC = (): JSX.Element => {
  return (
    <Container>
      <LogoContainer>
        <Icon />
        <Text>ToDo Do Do Do</Text>
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
    </Container>
  );
};

export default Header;