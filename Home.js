import React from 'react';
import { useContext, useEffect } from 'react';
import { PageTitleContext } from '../context/PageTitleContext';
import Header from '../layouts/Header';
import { Box, CardMedia } from '@mui/material';
import profileImage from '../assets/profile.jpg';

function Home() {
  const { setPageTitle } = useContext(PageTitleContext);
  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Header />
      <Box sx={{ mt: 3 }}>
        <CardMedia
          component="img"
          image={profileImage}
          alt="Profile"
          sx={{
            maxWidth: { xs: '100%', sm: 300 },
            mx: 'auto',
            borderRadius: '50%',
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;