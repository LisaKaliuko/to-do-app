import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, Dialog } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@hooks/useStore';
import { actionTypes } from '@constants/AuthErrors';
import { UserCreds } from '@customTypes/index';
import { Props, Error } from './types';
import { Input, ErrorMessage } from './styled';

const DialogAuth: React.FC<Props> = observer(({ isOpen, handleDialogClose, dialogType }: Props) => {
  const { userStore } = useStore();
  const [userCreds, setUserCreds] = useState<UserCreds>(null);
  const [authError, setAuthError] = useState<Error>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCreds((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClose = () => {
    handleDialogClose();
    setUserCreds(null);
    setAuthError(null);
  };

  const handleClick = () => {
    const response =
      dialogType === 'login' ? userStore.loginUser(userCreds) : userStore.addUser(userCreds);

    response.type === actionTypes.error
      ? setAuthError(response)
      : (handleDialogClose(), setAuthError(null), setUserCreds(null));
  };

  return (
    <Dialog open={isOpen} maxWidth="xs">
      <DialogTitle>{dialogType === 'login' ? 'Log In' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        {authError && <ErrorMessage>{authError.message}</ErrorMessage>}
        {dialogType === 'register' && (
          <>
            <Input
              id="name"
              label="Name"
              variant="standard"
              value={userCreds?.name ? userCreds.name : ''}
              fullWidth
              onChange={handleChange}
            />
            <Input
              id="age"
              label="Age"
              variant="standard"
              value={userCreds?.age ? userCreds.age : ''}
              fullWidth
              onChange={handleChange}
            />
          </>
        )}
        <Input
          id="email"
          label="Email address"
          type="email"
          variant="standard"
          value={userCreds?.email ? userCreds.email : ''}
          fullWidth
          required
          error={!!(authError && !userCreds?.email)}
          onChange={handleChange}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          variant="standard"
          value={userCreds?.password ? userCreds.password : ''}
          fullWidth
          required
          error={!!(authError && !userCreds?.password)}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick}>Ok</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
});

export default DialogAuth;
