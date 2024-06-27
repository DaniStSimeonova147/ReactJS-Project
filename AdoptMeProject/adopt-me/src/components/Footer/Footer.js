import * as React from 'react';

import { Facebook, LinkedIn } from '@mui/icons-material';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Web application for sharing animals for adoption.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sofia, Bulgaria
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: danisimeonova147@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +359895556107
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com/dani.simeonova.589/"
              color="#2565ae"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dani-simeonova-945181279/"
              color="#2565ae"
            >
              <LinkedIn />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="">
              Adopt ME
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
