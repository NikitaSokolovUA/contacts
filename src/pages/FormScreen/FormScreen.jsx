import { Container, TextField, Button, Stack, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createUser } from 'redux/users/userOperations';
import PickerDate from 'components/PickerDate';
import InputMask from 'react-input-mask';

const initialCredentials = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: '',
  avatar: '',
};

const FormScreen = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState(initialCredentials);
  const [urlAvatar, setUrlAvatar] = useState(null);

  const handleChange = (event, key) => {
    setCredentials(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const handleSubmit = e => {
    console.log(credentials);

    if (urlAvatar) {
      console.log(urlAvatar);
      uploadAvatar();
    }

    dispatch(createUser(credentials));
    setCredentials(initialCredentials);
    e.preventDefault();
  };

  const uploadAvatar = async () => {
    const responce = await fetch(urlAvatar);
    const image = await responce.blob();
    const id = nanoid();

    const storageRef = ref(storage, `avatar/${id}`);

    await uploadBytes(storageRef, image);
    const avatarUrl = await getDownloadURL(storageRef);

    console.log(avatarUrl);

    setCredentials(prevState => ({ ...prevState, avatar: avatarUrl }));
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
            <PickerDate setCredentials={setCredentials} />
          </Box>

          <Button
            variant="outlined"
            component="label"
            endIcon={<AddPhotoAlternateIcon />}
            onChange={e => {
              // const img = e.target.value.blob();
              console.log(e);
              setUrlAvatar(e.target.value);
            }}
          >
            {urlAvatar ? 'Loaded' : 'Load Avatar'}
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default FormScreen;
