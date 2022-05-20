import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { palette } from '@theme/index';

export const Container = styled('div')({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `2px solid ${palette.$captionText}`,
});

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const Icon = styled(AccessTimeFilledIcon)({
  fontSize: '50px',
  color: `${palette.$blackMain}`,
  marginRight: '10px',
});

export const Text = styled('span')({
  fontSize: '25px',
});

export const Link = styled(RouterLink)({
  margin: '15px',
  fontSize: '18px',
  color: palette.$blackMain,
  textDecoration: 'none',

  '&:hover': {
    color: palette.$linkHower,
  },
});
