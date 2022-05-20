import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Container, CustomCalendar } from './styled';

const CalendarPage: React.FC = (): JSX.Element => {
  const [date, setDate] = useState(null);

  const handleChangeDate = (date: Date) => {
    setDate(date);
  };

  return (
    <Container>
      <CustomCalendar locale="en" value={date} onChange={handleChangeDate} />
    </Container>
  );
};

export default CalendarPage;
