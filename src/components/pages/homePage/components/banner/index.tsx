import React from 'react';
import PrimaryButton from '@common/Buttons/Buttons';
import { Container, TitleBlock, Title, Text } from './styled';

const Banner: React.FC = (): JSX.Element => {
  return (
    <Container>
      <TitleBlock>
        <Title>Errare humanum est, stultum est in errore perseverare est stultum</Title>
        <Text>
          Errare humanum est, stultum est in errore perseverare stultum est in errore perseverare
        </Text>
        <PrimaryButton size="large">Sign Up Free</PrimaryButton>
      </TitleBlock>
    </Container>
  );
};

export default Banner;
