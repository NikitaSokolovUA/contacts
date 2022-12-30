import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import UserCard from 'components/UserCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/userOperations';
import { selectIsLoading, selectUsers } from 'redux/users/useSelector';
import UsersSkeleton from 'components/UsersSkeleton';

const ContactScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" component="h2" textAlign="center">
        Contacts
      </Typography>

      {isLoading ? (
        <UsersSkeleton />
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ flexWrap: 'wrap', gap: 2 }}
          direction={{ xs: 'column', sm: 'row' }}
          mt={2}
        >
          {items.map(item => (
            <UserCard user={item.user} key={item.id} />
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default ContactScreen;
