import styled from '@emotion/styled';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { palette } from '@theme/index';

export const Container = styled('div')({
  backgroundColor: palette.$backgroundSecondary,
});

export const SecurityContainer = styled('div')({
  width: '50%',
  padding: '70px 0px',
  margin: 'auto',
});

export const Icon = styled(GppGoodIcon)({
  fontSize: '80px',
  display: 'block',
  margin: 'auto',
});

export const Title = styled('p')({
  fontSize: '30px',
  fontWeight: 600,
  textAlign: 'center',
});

export const Text = styled('p')({
  fontSize: '18px',
  textAlign: 'center',
});
