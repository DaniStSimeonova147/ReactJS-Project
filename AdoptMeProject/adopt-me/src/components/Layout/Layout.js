import React from 'react';
import { Box, Grid } from '@mui/material';

import { Header } from '../Header/Header';
import { Routing } from '../../routes/Routing';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(images/backgroundImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        display="flex"
        minHeight="100vh"
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Routing />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
