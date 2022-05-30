import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, Dialog } from '@mui/material';
import { useStore } from '@hooks/useStore';
import { Props } from './types';
import { Input } from './styled';

const DialogAuth: React.FC<Props> = ({ isOpen, handleDialogClose, dialogType }): JSX.Element => {
  const { userStore } = useStore();
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = () => {
    console.log('login');
  };

  const handleRegister = () => {
    userStore.addUser({ name, age, email, password });
  };

  return (
    <Dialog open={isOpen} maxWidth="xs">
      <DialogTitle>{dialogType === 'login' ? 'Log In' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        {dialogType === 'register' && (
          <>
            <Input label="Name" variant="standard" fullWidth required onChange={handleChangeName} />
            <Input label="Age" variant="standard" fullWidth onChange={handleChangeAge} />
          </>
        )}
        <Input
          label="Email address"
          type="email"
          variant="standard"
          fullWidth
          required
          onChange={handleChangeEmail}
        />
        <Input
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          required
          onChange={handleChangePassword}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogType === 'login' ? handleLogin : handleRegister}>Ok</Button>
        <Button onClick={handleDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAuth;
