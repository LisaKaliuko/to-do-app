import styled from '@emotion/styled';
import Calendar from 'react-calendar';

export const Container = styled('div')({
  width: '90%',
  margin: 'auto',
});

export const CustomCalendar = styled(Calendar)({
  margin: 'auto',

  '&.react-calendar': {
    width: '500px',
    padding: '15px',
    border: 'none',
  },

  '& .react-calendar__navigation button': {
    fontSize: '20px',
  },

  '& .react-calendar__month-view__weekdays': {
    fontSize: '15px',
  },

  '& .react-calendar__tile': {
    fontSize: '15px',
  },
});
