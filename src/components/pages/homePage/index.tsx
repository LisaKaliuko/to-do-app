import React from 'react';
import Banner from './components/banner';
import Diagrams from './components/diagrams';
import Security from './components/security';
import { Content } from './styled';

const HomePage = () => {
  return (
    <Content>
      <Banner />
      <Diagrams />
      <Security />
    </Content>
  );
};

export default HomePage;
