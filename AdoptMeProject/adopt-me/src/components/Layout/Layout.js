import React from 'react';
import { Box } from '@mui/material';

import { Header } from '../Header/Header';
import { Routing } from '../../routes/Routing';
import { Footer } from '../Footer/Footer';

export const Layout = () => {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        backgroundImage: "url(images/backgroundImage.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
      }
    >
      <Header />
      <Routing />
      <Footer />
    </Box>
  );
};
