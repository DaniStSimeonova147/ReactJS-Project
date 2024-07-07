import { Link } from 'react-router-dom';
import { Card, Container, Button, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Container maxWidth="lg" margin="auto">
      <Card
        sx={{
          mt: 20,
          padding: 4,
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Adopt ME
        </Typography>
        <Typography variant="body1" paragraph>
          You can share your home with me!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/catalog"
          style={{ marginTop: '10px' }}
        >
          Wait List
        </Button>
      </Card>
      <Card
        sx={{
          mb: 20,
          width: '100%',
          minHeight: "30vh",
          backgroundImage: "url(/images/homeImage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          '@media (max-width: 600px)': {
            minHeight: "20vh",
          },
        }}
      >
      </Card>
    </Container>
  );
};
