import styled from '@emotion/styled';
import { PieChart } from 'react-minimal-pie-chart';
import { palette } from '@theme/index';

export const Container = styled('div')({
  backgroundColor: palette.$backgroundMain,
});

export const DiagramsContainer = styled('div')({
  width: '80%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-evenly',
});

export const DiagramContainer = styled('div')({
  padding: '20px',
});

export const Title = styled('p')({
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '25px',
  marginBottom: '7px',
});

export const Text = styled('p')({
  textAlign: 'center',
  margin: '0px 0px 7px 0px',
});

export const PieChartBox = styled(PieChart)({
  maxHeight: '300px',
});
