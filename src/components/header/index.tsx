import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@hooks/useStore';
import PrimaryButton from '@common/Buttons/Buttons';
import DialogAuth from './components/dialogAuth';
import { Container, LogoContainer, Icon, Text, Link } from './styled';

const Header: React.FC = observer(() => {
  const { userStore } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');

  const handleDialogOpen = (type: string) => () => {
    setDialogType(type);
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const handleLogOut = () => userStore.logOutUser();

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
        {userStore.isUserIn && (
          <>
            <Link to="opportunities">Opportunities</Link>
            <Link to="calendar">Calendar</Link>
          </>
        )}
      </div>
      <div>
        {userStore.isUserIn ? (
          <PrimaryButton size="medium" onClick={handleLogOut}>
            Log Out
          </PrimaryButton>
        ) : (
          <>
            <Link to="#" onClick={handleDialogOpen('login')}>
              Log In
            </Link>
            <PrimaryButton size="medium" onClick={handleDialogOpen('register')}>
              Sign Up
            </PrimaryButton>
          </>
        )}
      </div>
      <DialogAuth isOpen={isOpen} handleDialogClose={handleDialogClose} dialogType={dialogType} />
    </Container>
  );
});

export default Header;
