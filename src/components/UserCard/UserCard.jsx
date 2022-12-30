const { Avatar, CardContent, Typography, Box } = require('@mui/material');

const UserCard = ({ user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
      }}
    >
      <Avatar
        // alt={user.lastName}
        // src="../../../assets/user.png"

        src="/broken-image.jpg"
        sx={{ width: 100, height: 100 }}
      />

      <CardContent>
        <Typography variant="h6" component="h3" textAlign="center">
          {user.lastName} {user.firstName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign="center">
          {user.birthDate}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {user.phone}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {user.email}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default UserCard;
