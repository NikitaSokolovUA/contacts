import { Container, TextField, Button, Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/users/userOperations';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputMask from 'react-input-mask';

const initialCredentials = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: null,
};

const FormScreen = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (event, key) => {
    setCredentials(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const handleSubmit = e => {
    console.log(credentials);

    dispatch(createUser(credentials));
    setCredentials(initialCredentials);
    e.preventDefault();
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" textAlign="center">
        Create new user
      </Typography>

      <form onSubmit={e => handleSubmit(e)}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Box component="span" sx={{ width: '300px' }}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              value={credentials.firstName}
              onChange={e => handleChange(e, 'firstName')}
            />
          </Box>

          <Box component="span" sx={{ width: '300px' }}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              value={credentials.lastName}
              onChange={e => handleChange(e, 'lastName')}
            />
          </Box>
          <Box component="span" sx={{ width: '300px' }}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              value={credentials.email}
              onChange={e => handleChange(e, 'email')}
            />
          </Box>
          <Box component="span" sx={{ width: '300px' }}>
            <InputMask
              mask="+38 (099) 999 99 99"
              onChange={e => handleChange(e, 'phone')}
              value={credentials.phone}
            >
              {() => (
                <TextField
                  required
                  id="phone"
                  name="phone"
                  type="phone"
                  label="Phone"
                  fullWidth
                  autoComplete="phone"
                />
              )}
            </InputMask>
          </Box>

          <Box component="span" sx={{ width: '300px', alignItems: 'center' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date if birthday"
                value={credentials.birthDate}
                onChange={date =>
                  setCredentials(prevState => ({
                    ...prevState,
                    birthDate: date.format('DD/MM/YYYY'),
                  }))
                }
                renderInput={params => <TextField {...params} />}
                disableFuture={true}
              />
            </LocalizationProvider>
          </Box>

          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default FormScreen;
