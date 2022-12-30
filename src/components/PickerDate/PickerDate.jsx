import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

const PickerDate = ({ setCredentials }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (date) {
      setCredentials(prevState => ({
        ...prevState,
        birthDate: date.format('DD/MM/YYYY'),
      }));
    }
  }, [date, setCredentials]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date if birthday"
        value={date}
        onChange={value => setDate(value)}
        renderInput={params => <TextField {...params} />}
        disableFuture={true}
      />
    </LocalizationProvider>
  );
};

export default PickerDate;
