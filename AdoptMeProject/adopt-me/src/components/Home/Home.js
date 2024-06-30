import { Link } from 'react-router-dom';
import { Container, Box, Button, Typography, Paper } from '@mui/material';

export const Home = () => {
  return (
    <Container>
      <Box>
        <Paper
          sx={{
            padding: 2,
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
        </Paper>
        <Paper
          sx={{
            minHeight: "30vh",
            padding: 2,
            backgroundImage: "url(images/homeImage.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </Paper>
      </Box>
    </Container>
  );
};
