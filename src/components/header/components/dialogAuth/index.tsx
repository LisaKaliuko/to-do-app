import React from 'react';
import { DialogTitle, DialogContent, DialogActions, Button, Dialog } from '@mui/material';
import { Props } from './types';
import { Input } from './styled';

const DialogAuth: React.FC<Props> = ({ isOpen, handleDialogClose, dialogType }): JSX.Element => {
  return (
    <Dialog open={isOpen} maxWidth="xs">
      <DialogTitle>{dialogType === 'login' ? 'Log In' : 'Sign Up'}</DialogTitle>
      <DialogContent>
        {dialogType === 'register' && (
          <>
            <Input label="Name" variant="standard" fullWidth required />
            <Input label="Age" variant="standard" fullWidth />
          </>
        )}
        <Input label="Email address" type="email" variant="standard" fullWidth required />
        <Input label="Password" type="password" variant="standard" fullWidth required />
      </DialogContent>
      <DialogActions>
        <Button>Ok</Button>
        <Button onClick={handleDialogClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAuth;
