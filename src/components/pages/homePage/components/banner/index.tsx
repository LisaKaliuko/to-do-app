import React, { useState } from 'react';
import PrimaryButton from '@common/Buttons/Buttons';
import DialogAuth from '@components/header/components/dialogAuth';
import { Container, TitleBlock, Title, Text } from './styled';

const Banner: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleDialogOpen = (type: string) => () => {
    setDialogType(type);
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <TitleBlock>
        <Title>Errare humanum est, stultum est in errore perseverare est stultum</Title>
        <Text>
          Errare humanum est, stultum est in errore perseverare stultum est in errore perseverare
        </Text>
        <PrimaryButton size="large" onClick={handleDialogOpen('register')}>
          Sign Up Free
        </PrimaryButton>
      </TitleBlock>
      <DialogAuth isOpen={isOpen} handleDialogClose={handleDialogClose} dialogType={dialogType} />
    </Container>
  );
};

export default Banner;
