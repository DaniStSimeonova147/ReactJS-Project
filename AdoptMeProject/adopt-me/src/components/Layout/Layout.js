import React from 'react';
import { Container, Box, Grid } from '@mui/material';

import { Header } from '../Header/Header';
import { Routing } from '../../routes/Routing';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(images/backgroundImage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        justifyContent: "space-between",
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",

      }}
    >
      <Header />
      <Routing />
      <Footer />
    </Box>
  );
};
