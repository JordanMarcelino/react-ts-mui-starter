import { serverDown } from '@/config/images';
import { Button, Container, Typography } from '@mui/material';

export const AppRootErrorBoundary: React.FC = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
      role="alert"
    >
      <Typography
        sx={{
          fontWeight: 'medium',
          color: 'error.main',
          textAlign: 'center',
        }}
        variant="h6"
      >
        Ooops, something went wrong :(
      </Typography>
      <img
        src={serverDown}
        alt="Oops something went wrong"
        className="size-52 sm:size-80"
      />
      <Button
        className="mt-4"
        variant="outlined"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </Container>
  );
};
