import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { palette } from '@theme/index';
import { Props } from './types';

export const ScaledSlider = styled(Slider)((props: Props) => ({
  '&.MuiSlider-root': {
    height: '20px',
    minWidth: '300px',
    color: props.coloring,
    cursor: 'auto',
  },

  '& .MuiSlider-rail ': {
    height: '20px',
    borderRadius: '0px',
  },

  '& .MuiSlider-track': {
    height: '18px',
    borderRadius: '0px',
  },

  '& .MuiSlider-mark': {
    height: '22px',
    width: '3px',
    backgroundColor: `${palette.$backgroundMain}`,
    opacity: 1,
  },

  '& .MuiSlider-thumb': {
    display: 'none',
  },
}));

export const Text = styled('p')({
  margin: '-10px 0px 0px 0px',
  fontSize: '13px',
  textAlign: 'center',
  color: `${palette.$captionText}`,
});
