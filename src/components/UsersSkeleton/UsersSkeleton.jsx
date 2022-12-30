import { Stack } from '@mui/system';
import { Skeleton, Box } from '@mui/material';
import { useState } from 'react';

const UsersSkeleton = () => {
  const [array] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ flexWrap: 'wrap', gap: 2 }}
      direction={{ xs: 'column', sm: 'row' }}
      mt={2}
    >
      {array.map(item => (
        <Box
          key={item}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          boxShadow={2}
        >
          <Skeleton
            animation="wave"
            variant="circular"
            width={100}
            height={100}
            style={{ marginBottom: 10 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="40%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="60%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton
            animation="wave"
            height={20}
            width="60%"
            style={{ marginBottom: 6 }}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default UsersSkeleton;
