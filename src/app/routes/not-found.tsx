import { Link } from '@/components/ui/link';
import { notFound } from '@/config/images';
import { paths } from '@/config/paths';
import { Button, Container, Stack, Typography } from '@mui/material';

export const NotFoundRoute = () => {
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
    >
      <img src={notFound} alt="404 Not Found" className="size-80" />
      <Stack spacing={2}>
        <Typography
          textAlign={'center'}
          sx={{
            fontWeight: 'medium',
          }}
        >
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Link to={paths.home.getHref()} className="flex justify-center" replace>
          <Button variant="outlined">Go To Home</Button>
        </Link>
      </Stack>
    </Container>
  );
};
