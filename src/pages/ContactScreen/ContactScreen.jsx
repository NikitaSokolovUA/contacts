import { Stack } from '@mui/system';
import Container from 'components/Container';
import UserCard from 'components/UserCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/users/userOperations';
import { selectUsers } from 'redux/users/useSelector';

const ContactScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectUsers);
  console.log(items);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container>
      <p>Contacts</p>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        spacing={2}
      >
        {items.map(item => (
          <UserCard key={item.id} user={item.user} />
        ))}
      </Stack>
    </Container>
  );
};

export default ContactScreen;
