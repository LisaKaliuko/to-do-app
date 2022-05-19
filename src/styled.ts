import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { palette } from './theme';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const Header = styled('div')({
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
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

export const LogoText = styled('span')({
  fontSize: '25px',
});

export const Link = styled(RouterLink)({
  margin: '15px',
  fontSize: '18px',
  color: palette.$blackMain,
  textDecoration: 'none',
});
