import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { palette } from '@theme/index';

export const Input = styled(TextField)({
  marginBottom: '10px',
});

export const ErrorMessage = styled('p')({
  color: palette.$error,
  marginTop: '0px',
});
