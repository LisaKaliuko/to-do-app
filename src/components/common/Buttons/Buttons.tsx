import React from 'react';
import { Button } from '@mui/material';
import { Props } from './types';

const PrimaryButton: React.FC<Props> = ({ children, size, onClick }): JSX.Element => {
  return (
    <Button variant="contained" size={size} onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
